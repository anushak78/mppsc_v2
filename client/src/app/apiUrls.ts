export const getApiUserMastercollectionEndPoint = '/ui/user_list';
export const getApiAddUserMastercollectionEndPoint = '/ui/add_user';
export const getApiBoardMastercollectionEndPoint = '/ui/board_list';
export const getApiAddBoardMastercollectionEndPoint = '/ui/add_board';
export const getApiDeleteUserMastercollectionEndPoint = (userId: number) => {
  return `/ui/delete_user/${userId}`;
};
export const getApiDetailsUserMastercollectionEndPoint = (userId: number) => {
  return `/ui/user_details/${userId}`;
};
export const getApiUpdateUserMastercollectionEndPoint = '/ui/edit_user';
export const getApiGuestUserMastercollectionEndPoint = '/ui/guest_user_list';
export const getApiAddGuestUserMastercollectionEndPoint = '/ui/add_guest_user';
export const getApiEditGuestUserMastercollectionEndPoint = '/ui/edit_guest_user';
export const getApiAddGuestUserMasterDatescollectionEndPoint = '/ui/add_guest_user_dates';
export const getApiEditGuestUserMasterDatescollectionEndPoint = '/ui/edit_guest_user_dates';
export const getApiDetailsGuestUserMastercollectionEndPoint = (userId: number) => {
  return `/ui/guest_user_details/${userId}`;
};
export const getApiDeleteGuestUserMastercollectionEndPoint = (userId: number) => {
  return `/ui/add_delete_user/${userId}`;
};
export const getApiDetailsBoardUserMastercollectionEndPoint = (boardId: number) => {
  return `/ui/board_details/${boardId}`;
};
export const getApiDeleteBoardUserMastercollectionEndPoint = (boardId: number) => {
  return `/ui/delete_board/${boardId}`;
};
export const getApiEditBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_board';
export const getApiAddInterviewMasterEndPoint = 'http://0.0.0.0:6543/ui/add_interview';
export const getApiInterviewMasterEndPoint = 'http://0.0.0.0:6543/ui/interview_list';
export const getApiDeleteInterviewMasterEndPoint = (interviewId) => {
  return `http://0.0.0.0:6543/ui/delete_interview/${interviewId}`;
};
export const getApiEditInterviewMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/0';
export const getApiDatesInterviewMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_interview_dates';
export const getApiInterviewMarksEndPoint = 'http://0.0.0.0:6543/ui/add_interview_marks';
export const getApiInterviewBoardDatescollectionEndPoint = (interviewid: number) => {
  return `/ui/fetch_interview_dates/${interviewid}`;
};