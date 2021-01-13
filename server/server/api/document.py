import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.document import (
    DocumentMaster,
    QuestionMaster,
    AnswerMaster
)

svc_document_list = Service(
    name="api.doc_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/doc_list", cors_policy=cors.POLICY)

svc_document_details = Service(
    name="api.doc_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/doc_details/{id}", cors_policy=cors.POLICY)

svc_add_document = Service(
    name="api.add_doc", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_doc", cors_policy=cors.POLICY)

svc_add_question = Service(
    name="api.add_ques", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_ques/{id}", cors_policy=cors.POLICY)


@svc_document_list.get()
def doc_list(request):
    docs = request.dbsession.query(DocumentMaster).all()
    doc_list = []
    for ele in docs:
        doc_list.append({
            "id": ele.id,
            "doc_name": ele.doc_name
        })
    return {
        "code": 0,
        "message": "success",
        "doc_list": doc_list
    }


@svc_document_details.get()
def doc_details(request):
    id = request.matchdict['id']
    docs = request.dbsession.query(DocumentMaster).filter_by(id=id).first()
    ques = request.dbsession.query(QuestionMaster).filter_by(doc_id=id).all()
    ques_list = []
    for ele in ques:
        ans = request.dbsession.query(AnswerMaster).filter_by(ques_id=ele.id).all()
        ans_list = []
        for ele1 in ans:
            ans_list.append({
                "id": ele1.id,
                "answer_text": ele1.answer_text,
                "option_no": ele1.option_no,
                "ques_id": ele.id
            })
        ques_list.append({
            "id": ele.id,
            "question_text": ele.question_text,
            "doc_id": id,
            "answers": ans_list
        })
    doc_list = []
    for ele in docs:
        doc_list.append({
            "id": ele.id,
            "doc_name": ele.doc_name,
            "questions": ques_list
        })


@svc_add_document.post(require_csrf=False)
def add_doc(request):
    doc_name = request.json_body['doc_name']
    doc = DocumentMaster(doc_name=doc_name)
    request.dbsession.add(doc)
    return {
        "code": 0,
        "message": "success"
    }


@svc_add_question.post(require_csrf=False)
def add_ques(request):
    id = request.matchdict['id']
    options = request.json_body['options']
    question_text = request.json_body['question_text']
    ques = QuestionMaster(doc_id=id, question_text=question_text)
    request.dbsession.add(doc)
    ques_id = request.dbsession.query(QuestionMaster).order_by(
        QuestionMaster.id.desc()).first()
    ques_id_val = ques_id.id

    for ele in options:
        answer_text = ele.answer_text
        option_no = ele.option_no
        ans = AnswerMaster(
            answer_text=answer_text, option_no=option_no, ques_id=ques_id_val)
        request.dbsession(ans)

    return {
        "code": 0,
        "message": "success"
    }

