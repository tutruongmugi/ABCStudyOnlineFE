import * as TYPES from "../types";

let initState = {
  topNewCourses: [],
  topRegisterCourses: [],
  topRateInWeek: [],
  categories: [],
  favoriteCourses: [],
  cart: [],
  courseDetail: null,
  categoryDetail: null,
  listCoursesBySearch: [],
  getTopNewCourseStatus: false,
  getTopRegisterCoursesStatus: false,
  getTopRateInWeekStatus: false,
  getCategoriesStatus: false,
  getFavoriteCoursesStatus: false,
  addFavoriteCourseStatus: false,
  removeFavoriteCourseStatus: false,
  getCourseDetailStatus: false,
  addCourseToCartStatus: false,
  removeCourseFromCartStatus: false,
  getCoursesFromCartStatus: false,
  getCategoryDetailStatus: false,
  searchCoursesStatus: false,
  chargeCourseStatus: false,
};

export function Courses(prevState = initState, action) {
  switch (action.type) {
    case TYPES.GET_TOP_NEW_COURSE_SUCCESSED:
      return {
        ...prevState,
        getTopNewCourseStatus: true,
        topNewCourses: action.payload.data.list,
      };
    case TYPES.GET_TOP_NEW_COURSE_FAILED:
      return { ...prevState, getTopNewCourseStatus: false };
    case TYPES.GET_TOP_REGISTER_COURSE_SUCCESSED:
      return {
        ...prevState,
        getTopRegisterCourseStatus: true,
        topRegisterCourses: action.payload.data.list,
      };
    case TYPES.GET_TOP_REGISTER_COURSE_FAILED:
      return { ...prevState, getTopRegisterCourseStatus: false };
    case TYPES.GET_TOP_RATE_IN_WEEK_SUCCESSED:
      return {
        ...prevState,
        getTopRateInWeekStatus: true,
        topRateInWeek: action.payload.data.list,
      };
    case TYPES.GET_TOP_RATE_IN_WEEK_FAILED:
      return { ...prevState, getTopRateInWeekStatus: false };
    case TYPES.GET_CATEGORIES_SUCCESSED:
      return {
        ...prevState,
        categories: action.payload.data.list,
        getCategoriesStatus: true,
      };
    case TYPES.GET_CATEGORIES_FAILED:
      return { ...prevState, getCategoriesStatus: false };
    case TYPES.GET_FAVORITE_COURSES_SUCCSEDD:
      return {
        ...prevState,
        favoriteCourses: action.payload.data.list,
        getFavoriteCoursesStatus: true,
      };
    case TYPES.GET_FAVORITE_COURSES_FAILED:
      return { ...prevState, getFavoriteCoursesStatus: false };
    case TYPES.ADD_FAVORITE_COURSE_SUCCESSED:
      return {
        ...prevState,
        addFavoriteCourseStatus: true,
      };
    case TYPES.ADD_FAVORITE_COURSE_FAILED:
      return { ...prevState, addFavoriteCourseStatus: false };
    case TYPES.REMOVE_FAVORITE_COURSE_SUCCESSED:
      return {
        ...prevState,
        removeFavoriteCourseStatus: true,
      };
    case TYPES.REMOVE_FAVORITE_COURSE_FAILED:
      return { ...prevState, removeFavoriteCourseStatus: false };
    case TYPES.GET_COURSE_DETAIL_SUCCSED:
      return {
        ...prevState,
        getCourseDetailStatus: true,
        courseDetail: action.payload.data,
      };
    case TYPES.GET_COURSE_DETAIL_FAILED:
      return { ...prevState, getCourseDetailStatus: false };

    case TYPES.ADD_COURSE_TO_CART_SUCCESSED:
      return { ...prevState, addCourseToCartStatus: true };
    case TYPES.ADD_COURSE_TO_CART_FAILED:
      return { ...prevState, addCourseToCartStatus: false };

    case TYPES.REMOVE_COURSE_FROM_CART_SUCCESSED:
      return { ...prevState, removeCourseFromCartStatus: true };
    case TYPES.REMOVE_COURSE_FROM_CART_FAILED:
      return { ...prevState, removeCourseFromCartStatus: false };
    case TYPES.GET_COURSES_FROM_CART_SUCCESSED:
      return {
        ...prevState,
        getCoursesFromCartStatus: true,
        cart: action.payload.data.list,
      };
    case TYPES.GET_COURSES_FROM_CART_FAILED:
      return { ...prevState, getCoursesFromCartStatus: false };
    case TYPES.GET_CATEGORY_DETAIL_SUCCESSED:
      return {
        ...prevState,
        getCategoriesStatus: true,
        categoryDetail: action.payload.data,
      };
    case TYPES.GET_CATEGORY_DETAIL_FAILED:
      return { ...prevState, getCategoriesStatus: false };
    case TYPES.SEARCH_COURSES_SUCCESSED:
      return {
        ...prevState,
        searchCoursesStatus: true,
        listCoursesBySearch: action.payload.data.list,
      };
    case TYPES.SEARCH_COURSES_FAILED:
      return { ...prevState, searchCoursesStatus: false };
    case TYPES.CHARGE_COURSE_SUCCESSED:
      return {
        ...prevState,
        chargeCourseStatus: true,
      };
    case TYPES.CHARGE_COURSE_FAILED:
      return { ...prevState, chargeCourseStatus: false };
    default:
      return prevState;
  }
}
