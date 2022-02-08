export const strapi = "https://strapi-dev.cariber.co";
export const strapiApi = strapi + "/api";
export const strapiAuthApi = strapiApi+"/auth/local";
export const strapiRegisterApi = strapiApi+"/auth/local/register";
export const strapiForgotPasswordApi = strapiApi+"/auth/forgot-password";
export const strapiPasswordApi = strapiApi+"/auth/reset-password";
export const strapiGetUserProfileApi = strapiApi+"/user/get-me";
export const strapiUpdateUseProfilerApi = strapiApi+"/user/update-me";
export const strapiSingleCourse = strapiApi+"/single-course?populate=*";
export const strapiAnnualPromotion = strapiApi+"/annual-promotion?populate=*";
export const strapiReviewHeader = strapiApi+"/review-header?populate=*";
export const strapiReviewStudents = strapiApi+"/review-students?populate=*&sort[0]=id";
export const strapiReviewCaribers = strapiApi+"/review-caribers?populate=*&sort[0]=id";
export const strapiReviewShopees = strapiApi+"/review-shopees?populate=*&sort[0]=id";

export function strapiImage(url: string){
  return strapi+url;
}