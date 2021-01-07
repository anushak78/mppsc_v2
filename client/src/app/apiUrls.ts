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
export const getApiEditBoardMastercollectionEndPoint = '/ui/edit_board';
export const getApiAddInterviewMasterEndPoint = '/ui/add_interview';
export const getApiInterviewMasterEndPoint = '/ui/interview_list';
