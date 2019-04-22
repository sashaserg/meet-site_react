import ACTION from './actionTypes'

export const getAllUsers = (query) => {
  return {
      type: ACTION.USERS,
      query
  }
};
export const getUserById = (userId) => {
    return {
        type: ACTION.USER_BY_ID,
        userId,
    }
};
export const login = (user) => {
    return {
        type: ACTION.LOGIN,
        user,
    }
};
export const signup = (user) => {
    return {
        type: ACTION.SIGNUP,
        user,
    }
};
export const logout = (refreshToken) => {
    return {
        type: ACTION.LOGOUT,
        refreshToken,
    }
};
export const getPhotosByUserId = (userId) => {
    return {
        type: ACTION.PHOTOS,
        userId,
    }
};
export const getPhotoById = (photoId) => {
    return {
        type: ACTION.PHOTO_BY_ID,
        photoId,
    }
};
export const getCommentsByPhotoId = (photoId) => {
    return {
        type: ACTION.COMMENTS,
        photoId,
    }
};
