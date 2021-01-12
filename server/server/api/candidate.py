import pandas as pd
import logging
from cornice import Service
import os

from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)

from . import cors

from ..models.candidate import CandidateMaster

GENDER = ['Male', 'Female']
CATEGORY = ['UR', 'EWS', 'SC', 'ST', 'OBC']
PH_STATUS = ['Y', 'N']

log = logging.getLogger(__name__)

svc_upload_candidate = Service(
    name="api.upload_candidate", permission=NO_PERMISSION_REQUIRED,
    path="/ui/upload_candidate", cors_policy=cors.POLICY)


@svc_upload_candidate.post(require_csrf=False)
def upload_candidate(request):
    action = request.json_body['action']
    interview_id = request.json_body['interview_id']

    # file read from request
    filename = request.POST['candidate_file'].filename
    input_file = request.POST['candidate_file'].file

    file_path = os.path.join(os.getcwd(), "../../static/")
    with open(file_path + filename, 'wb') as output_file:
        shutil.copyfileobj(input_file, output_file)
    df = pd.read_excel(file_path + filename)
    columns = {'Application No.', 'Roll No.', 'Name', 
        'Gender (Male / Female)', 'Category (UR/EWS/SC/ST/OBC)', 
        'PH Status (Y / N)'}
    
    # columns check
    if not columns.issubset(df.columns):
        return {
            "code": 0,
            "message": "Columns are wrong"
        }

    # null values check
    if df.isnull().values.any():
        nan_values = df[df.isna().any(axis=1)]
        return {
            "code": 0,
            "message": "Excel contains null values"
        }

    # individual column check
    if not df[df['Gender (Male / Female)'].astype(str).isin(GENDER) == False].empty:
        return {
            "code": 0,
            "message": "Gender column value is wrong"
        }
    if not df[df['Category (UR/EWS/SC/ST/OBC)'].astype(str).isin(CATEGORY) == False].empty:
        return {
            "code": 0,
            "message": "Category column value is wrong"
        }
    if not df[df['PH Status (Y / N)'].astype(str).isin(PH_STATUS) == False].empty:
        return {
            "code": 0,
            "message": "Ph_status column value is wrong"
        }

    if action == 0:
        add_candidate_data(request, df, interview_id)
    else:
        update_candidate_data(request, df, interview_id)


def update_candidate_data(request, df, interview_id):
    for index, row in df.iterrows():
        application_no = row['Application No.']	
        roll_no = row['Roll No.']	
        name = row['Name']	
        gender = row['Gender (Male / Female)']	
        category = row['Category (UR/EWS/SC/ST/OBC)']	
        ph_status = row['PH Status (Y / N)']
        candidate = CandidateMaster.fetch_data(
            request.dbsession, application_no, roll_no)
        if candidate is None:
            return {
                "code": 0,
                "message": "Value doesn't exit to edit",
                "index": index 
            }
        else:
            candidate.name = name
            candidate.gender = gender
            candidate.category = category
            candidate.ph_status = ph_status
            candidate.interview_id = interview_id

        return {
            "code": 0,
            "message": "success"
        }


def add_candidate_data(request, df, interview_id):
    # to check if value exists in db
    len_appl = len(CandidateMaster.check_appl_no(request.dbsession, df['Application No.'].tolist()))
    len_roll = len(CandidateMaster.check_roll_no(request.dbsession, df['Roll No.'].tolist()))

    if len_appl > 0:
        return {
            "code": 0,
            "message": "Application no is repeated"
        }
    if len_roll > 0:
        return {
            "code": 0,
            "message": "Roll no is repeated"
        }

    objects = []
    for index, row in df.iterrows():
        application_no = row['Application No.']	
        roll_no = row['Roll No.']	
        name = row['Name']	
        gender = row['Gender (Male / Female)']	
        category = row['Category (UR/EWS/SC/ST/OBC)']	
        ph_status = row['PH Status (Y / N)']

        candidate = CandidateMaster(
            application_no=application_no, roll_no=roll_no, name=name, gender=gender, 
            category=category, ph_status=ph_status, interview_id=interview_id)
        objects.append(candidate)

    if len(objects) > 0:
        print("here")
        request.dbsession.add_all(objects)
        return {
            "code": 0,
            "message": "Sucess"
        }