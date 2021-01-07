export const getApiUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/user_list';
export const getApiAddUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_user';
export const getApiBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/board_list';
export const getApiAddBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_board';
export const getApiDeleteUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/delete_user/${userId}`;
};
export const getApiDetailsUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/user_details/${userId}`;
};
export const getApiUpdateUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_user';
export const getApiGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/guest_user_list';
export const getApiAddGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_guest_user';
export const getApiEditGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_guest_user';
export const getApiAddGuestUserMasterDatescollectionEndPoint = 'http://0.0.0.0:6543/ui/add_guest_user_dates';
export const getApiEditGuestUserMasterDatescollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_guest_user_dates';
export const getApiDetailsGuestUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/guest_user_details/${userId}`;
};
export const getApiDeleteGuestUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/add_delete_user/${userId}`;
};
export const getApiDetailsBoardUserMastercollectionEndPoint = (boardId: number) => {
  return `http://0.0.0.0:6543/ui/board_details/${boardId}`;
};
export const getApiDeleteBoardUserMastercollectionEndPoint = (boardId: number) => {
  return `http://0.0.0.0:6543/ui/delete_board/${boardId}`;
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
