export const getApiUserMastercollectionEndPoint =  'http://0.0.0.0:6543/ui/user_list';
export const getApiAddUserMastercollectionEndPoint =  'http://0.0.0.0:6543/ui/add_user';
export const getApiBoardMastercollectionEndPoint =  'http://0.0.0.0:6543//ui/board_list';
export const getApiAddBoardMastercollectionEndPoint =  'http://0.0.0.0:6543//ui/add_board';
export const getApiDeleteUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/delete_user/${userId}`;
};
export const getApiDetailsUserMastercollectionEndPoint = (userId: number) => {
  return `http://0.0.0.0:6543/ui/user_details/${userId}`;
};
export const getApiGuestUserMastercollectionEndPoint =  'http://0.0.0.0:6543/ui/guest_user_list';
export const getApiAddGuestUserMastercollectionEndPoint =  'http://0.0.0.0:6543/ui/add_guest_user';
export const getApiAddGuestUserMasterDatescollectionEndPoint =  'http://0.0.0.0:6543/ui/add_guest_user_dates';
