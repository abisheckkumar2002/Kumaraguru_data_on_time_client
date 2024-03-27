// import package
import axios from "axios";

// import lib
import config from "../lib/config";

// import constant
import { SET_CURRENT_USER } from "../constant";

export const updateProfile = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("name", data.name);
    bodyFormData.append("email", data.email);
    bodyFormData.append("mobilenumber", data.mobilenumber);
    bodyFormData.append("photo", data.photo);
    bodyFormData.append("company", data.company);
    bodyFormData.append("designation", data.designation);
    bodyFormData.append("detail", data.detail);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateProfile`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateuser = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("name", data.name);
    bodyFormData.append("email", data.email);
    bodyFormData.append("phonenumber", data.phonenumber);
    bodyFormData.append("address1", data.address1);
    bodyFormData.append("address2", data.address2);
    bodyFormData.append("pincode", data.pincode);
    bodyFormData.append("city", data.city);
    bodyFormData.append("country", data.country);
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("userId", data.userId);
    bodyFormData.append("password", data.password);
    bodyFormData.append("company", data.company);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateuser`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const addfile = async (Photofile) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", Photofile);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfile`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return respData.data.image;
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const videoadd = async (Photofile) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", Photofile);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addvideo`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {video:respData.data.image,cover:respData.data.coverImage};
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const adduser = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("name", data.name);
    bodyFormData.append("email", data.email);
    bodyFormData.append("phonenumber", data.phonenumber);
    bodyFormData.append("address1", data.address1);
    bodyFormData.append("address2", data.address2);
    bodyFormData.append("pincode", data.pincode);
    bodyFormData.append("city", data.city);
    bodyFormData.append("country", data.country);
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("password", data.password);
    bodyFormData.append("company", data.company);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/adduser`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addblog = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("content", data.content);
    bodyFormData.append("heading", data.heading);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addblog`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addcompany = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addcompany`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtestimonial = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("name", data.name);
    bodyFormData.append("occupation", data.occupation);
    
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtestimonial`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addcontact = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addcontact`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addexam = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addexam`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfeed = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfeed`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfaq = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfaq`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addsubject = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsubject`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addstatic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addstatic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtype = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtype`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addwallet = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addwallet`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addclass = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addclass`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtopic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtopic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtopictest = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtopictest`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfreetopic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfreetopic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addmicrotopic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmicrotopic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addsitesetting = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsitesetting`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const addeducontent = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addeducontent`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addindcontent = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addindcontent`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addbanner = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
   
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addbanner`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtrendingvideo = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("Photofile2", data.Photofile2);
   
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtrendingvideo`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addmarveltestquestion = async (data) => {
  try {
    console.log(data)
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("set", data.set);
    bodyFormData.append("id", data.id);
    bodyFormData.append("topic", data.topic);
    bodyFormData.append("negativemark", data.negativemark);
   
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/uploadfile`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const addmarveltest = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmarveltest`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addbannerapp = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
  
    bodyFormData.append("course", data.course);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addbannerapp`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addteacher = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("name", data.name);
    bodyFormData.append("email", data.email);
    bodyFormData.append("specialization", data.specialization);
    bodyFormData.append("qualification", data.qualification);
   
    bodyFormData.append("phonenumber", data.phonenumber);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addteacher`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addlivecourse = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("teacher", data.teacher);
    bodyFormData.append("targetexam", data.targetexam);
    bodyFormData.append("validity", data.validity);
    bodyFormData.append("testsets", data.testsets);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addlivecourse`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
      
    };
  }
};

export const addlivecoursee = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addlivecoursevideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const adddirectt = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/adddirectcoursevideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addlivecourseepdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addlivecoursepdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const adddirectpdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/adddirectcoursepdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addmicrovideo = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmicrovideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfreestuffvideo = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfreestuffvideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfreestuffpdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfreestuffpdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addrecordvideo = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addrecordvideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const addmaterialvideo = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmaterialvideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addrecordpdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addrecordpdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addmicropdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmicropdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addlivecourse1 = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("targetexam", data.targetexam);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addlivecourse`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const addfreestuff = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("classs", data.classs);
    bodyFormData.append("language", data.language);
    
    bodyFormData.append("price", data.price);
   
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("testsets", data.testsets);
  
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfreestuff`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtestseries = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("validity", data.validity);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("targetexam", data.targetexam);
    bodyFormData.append("testsets", data.testsets);
    



   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtestseries`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const adddirect = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("validity", data.validity);
    bodyFormData.append("testsets", data.testsets);

   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/adddirect`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addscholarship = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("scholarship", data.scholarship);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("targetexam", data.targetexam);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addscholarship`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addtab = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("subject", data.subject);
 
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addtab`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addmicro = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("Photofile2", data.Photofile2);
    bodyFormData.append("Photofile3", data.Photofile3);
    bodyFormData.append("Photofile4", data.Photofile4);
    bodyFormData.append("Photofile5", data.Photofile5);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("targetexam", data.targetexam);
    bodyFormData.append("validity", data.validity);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addmicro`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addrecorded = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("Photofile2", data.Photofile2);
    bodyFormData.append("startDate", data.startDate);
    bodyFormData.append("endDate", data.endDate);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("language", data.language);
    bodyFormData.append("totalclasses", data.totalclasses);
    bodyFormData.append("totaltest", data.totaltest);
    bodyFormData.append("totalpdf", data.totalpdf);
    bodyFormData.append("totalquestions", data.totalquestions);
    bodyFormData.append("price", data.price);
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("targetexam", data.targetexam);
    bodyFormData.append("validity", data.validity);
    bodyFormData.append("testsets", data.testsets);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addrecorded`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addevent = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("company", data.company);
    bodyFormData.append("location", data.location);
    bodyFormData.append("date", data.date);
    bodyFormData.append("content", data.content);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addevent`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addservicedetail = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("content", data.content);
    bodyFormData.append("description", data.description);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addservicedetail`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addabout = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("Photofile2", data.Photofile2);
    bodyFormData.append("content", data.content);
    bodyFormData.append("fcontent", data.fcontent);
    bodyFormData.append("team", data.team);
    bodyFormData.append("name", data.name);
    bodyFormData.append("occupation", data.occupation);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addabout`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addfame = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    
    bodyFormData.append("name", data.name);
   
    bodyFormData.append("exam", data.exam);
   
    bodyFormData.append("content", data.content);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addfame`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addservice = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("description", data.description);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addservice`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addindustry = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("description", data.description);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addindustry`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateindustry = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("description", data.description);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateindustry/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetestimonial = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("content", data.content);
    bodyFormData.append("name", data.name);
    bodyFormData.append("occupation", data.occupation);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetestimonial/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatecompany = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatecompany/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatestory = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.image2);
    bodyFormData.append("Photofile3", data.image3);
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatestory/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const updatecontact = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatecontact/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateprivacypolicy = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateprivacypolicy/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateexam = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateexam/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatefeed = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatefeed/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatefaq = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatefaq/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatesubject = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatesubject/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updaterespectsubject = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updaterespectsubject/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatestatic = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatestatic/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetype = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetype/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatewallet = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatewallet/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatecoupon = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatecoupon/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateclass = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateclass/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetopic = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetopic/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

// export const updatesitesetting = async (data,id) => {
//   try {

//     let respData = await axios({
//       method: "post",
//       url: `${config.API}/admin/updatesitesetting/`+id,
//       headers: {
//         Authorization: localStorage.admin_token,
//       },
//       data:data,
//     });
//     return {
//       loading: false,
//     };
//   } catch (err) {
//     return {
//       loading: false,
//       error: err.response.data.errors,
//     };
//   }
// };

export const updatesitesetting = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.image2);
    bodyFormData.append("address", data.address);
    bodyFormData.append("mail1", data.mail1);
   
    bodyFormData.append("mail2", data.mail2);
    bodyFormData.append("phone2", data.phone2);
    bodyFormData.append("phone1", data.phone1);
    bodyFormData.append("facebook", data.facebook);
    bodyFormData.append("youtube", data.youtube);
    bodyFormData.append("twitter", data.twitter);
    bodyFormData.append("linkedin", data.linkedin);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatesitesetting/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const updateaboutus = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("content", data.content);
    bodyFormData.append("heading", data.heading);
   
    bodyFormData.append("content1", data.content1);
    bodyFormData.append("content2", data.content2);
    bodyFormData.append("content3", data.content3);
    bodyFormData.append("content4", data.content4);
    bodyFormData.append("content5", data.content5);
    bodyFormData.append("content6", data.content6);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateaboutus/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const updateeducontent = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateeducontent/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatemission = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatemission/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateindcontent = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateindcontent/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updateservice = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile3", data.image3);
    bodyFormData.append("Photofile4", data.image4);
    bodyFormData.append("Photofile5", data.image5);
    bodyFormData.append("Photofile6", data.image6);
    bodyFormData.append("Photofile2", data.image2);
    bodyFormData.append("description", data.description);
    bodyFormData.append("description2", data.description2);
    bodyFormData.append("description3", data.description3);
    bodyFormData.append("description4", data.description4);
    bodyFormData.append("description5", data.description5);
    bodyFormData.append("taste", data.taste);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateservice/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateservicedetail = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("description", data.description);
    bodyFormData.append("description2", data.description2);
    bodyFormData.append("description3", data.description3);
    bodyFormData.append("description4", data.description4);
    bodyFormData.append("description5", data.description5);
    bodyFormData.append("description6", data.description6);
    bodyFormData.append("description7", data.description7);
    bodyFormData.append("description8", data.description8);
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateservicedetail/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatestudy = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("description", data.description);
    bodyFormData.append("heading", data.heading);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatestudy/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updaterecent = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.image2);
    bodyFormData.append("Photofile3", data.image3);
    bodyFormData.append("description", data.description);
    bodyFormData.append("description2", data.description2);
    bodyFormData.append("description3", data.description3);
    bodyFormData.append("heading", data.heading);
    bodyFormData.append("heading2", data.heading2);
    bodyFormData.append("heading3", data.heading3);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updaterecent/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateblog = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("content", data.content);
    bodyFormData.append("heading", data.heading);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateblog/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatelogo = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("content", data.content);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatelogo/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatebanner = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatebanner/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetrendingvideo = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.video);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetrendingvideo/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatemarveltest = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("eligiblity", data.eligiblity);
    bodyFormData.append("subject", data.subject);
    bodyFormData.append("exam", data.exam);
    bodyFormData.append("setname", data.setname);
    bodyFormData.append("free", data.free);
    bodyFormData.append("noofattempt", data.noofattempt);
    bodyFormData.append("mark", data.mark);
    bodyFormData.append("time", data.time);
    bodyFormData.append("negativemark", data.negativemark);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatemarveltest/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateappbanner = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
   
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateappbanner/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateteacher = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("name", data.name);
    bodyFormData.append("specialization", data.specialization);
    bodyFormData.append("email", data.email);
    bodyFormData.append("phonenumber", data.phonenumber);
    bodyFormData.append("qualification", data.qualification);
    
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateteacher/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updatelivecourse = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("teacher", data.teacher);
     bodyFormData.append("language", data.language);
     bodyFormData.append("validity", data.validity);
     bodyFormData.append("testsets", data.testsets);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatelivecourse/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatefreestuff = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("classs", data.classs);
    bodyFormData.append("testsets", data.testsets);
   
    
     bodyFormData.append("price", data.price);
    
     bodyFormData.append("subject", data.subject);
    
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatefreestuff/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetestseries = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("validity", data.validity);
    bodyFormData.append("testsets", data.testsets);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetestseries/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatedirect = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
     bodyFormData.append("validity", data.validity);
     bodyFormData.append("testsets", data.testsets);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatedirect/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatescholarship = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("scholarship", data.scholarship);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatescholarship/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatetab = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
    
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatetab/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatemicro = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.video);
    bodyFormData.append("Photofile3", data.notes);
    bodyFormData.append("Photofile4", data.exercise);
    bodyFormData.append("Photofile5", data.dpp);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
     bodyFormData.append("validity", data.validity);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatemicro/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updaterecorded = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("Photofile2", data.video);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("introduction", data.introduction);
    bodyFormData.append("endDate", data.endDate);
     bodyFormData.append("startDate", data.startDate);
     bodyFormData.append("totalclasses", data.totalclasses);
     bodyFormData.append("totaltest", data.totaltest);
     bodyFormData.append("totalpdf", data.totalpdf);
     bodyFormData.append("totalquestions", data.totalquestions);
     bodyFormData.append("price", data.price);
     bodyFormData.append("eligiblity", data.eligiblity);
     bodyFormData.append("subject", data.subject);
     bodyFormData.append("targetexam", data.targetexam);
     bodyFormData.append("exam", data.exam);
     bodyFormData.append("language", data.language);
     bodyFormData.append("validity", data.validity);
     bodyFormData.append("testsets", data.testsets);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updaterecorded/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const updateevent = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("location", data.location);
    bodyFormData.append("date", data.date);
    bodyFormData.append("company", data.company);
    bodyFormData.append("content", data.content);
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateevent/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updateabout = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    
   
    bodyFormData.append("team", data.team);
    bodyFormData.append("name", data.name);
   
  
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateabout/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};




export const updatefame = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
   
    bodyFormData.append("content", data.content);
    bodyFormData.append("name", data.name);
   
    bodyFormData.append("exam", data.exam);
   
   
   
  
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatefame/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addstudy = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("description", data.description);
    bodyFormData.append("heading", data.heading);
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addstudy`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const addlogo = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.Photofile);
    bodyFormData.append("content", data.content);
 
   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addlogo`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const login = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/login`,
      data,
    });

    localStorage.setItem("admin_token", respData.data.token);

    return {
      loading: false,
      result: respData.data.result,
    };
  } catch (err) {
    console.log(err);
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatepassword = async (data) => {
  console.log(data, "datadatadata");
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatepassword`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data,
    });

    return {
      loading: false,
      result: respData.data.result,
    };
  } catch (err) {
    console.log(err);
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getuser = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getuser/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getindustrie = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getindustry/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcontact = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getcontactdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getexam = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getexamdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfeed = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfeeddata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfaq = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfaqdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsubject = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/subjectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrespectsubject = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/respectsubjectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsubjectrespectlist = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/subjectrespectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getstatic = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/staticdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettype = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/typedata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getwallet = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/walletdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcoupon = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/coupondata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getpurchase = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/purchasedata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getenquiry = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/enquirydata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getclass = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/classdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettopic = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/topicdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsitesettingdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getsitesettingdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getaboutusdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/aboutus/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};







export const getcontactform = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/formlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const getcontactformdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getcontactform/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const gettestimonial = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettestimonial/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcompany = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getcompany/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getstory = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getstory/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getblog = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getblogdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getservice = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getservicedata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getservicedetail = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getservicedetail/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getstudy = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getstudy/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecent = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getrecent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlogodata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlogodata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getbannerdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getbannerdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const gettrendingvideodata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettrendingvideodata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmarveltestdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmarveltestdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getteacherdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getteacherdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlivecourseviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlivecourseviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getdirectviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getdirectviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getagentdetails = async (id) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/web/agentwallet/`,
      headers: {
        Authorization: localStorage.agent_token,
      },
     
    });
    return {
      loading: false,
      detail: respData.data.user,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecordedviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getrecordedviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmaterialviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmaterialviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicroviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmicroviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettestseriesviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettestseriesviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettabviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettabviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getscholarshipviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getscholarshipviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreestuffviewdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfreestuffviewdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlivecoursedata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlivecoursedata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreestuffdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfreestuffdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettestseriesdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettestseriesdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getdirectdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getdirectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getscholarshipdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getscholarshipdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettabdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettabdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicrodata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmicrodata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecordeddata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getrecordeddata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getevent = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/geteventdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const geteducontent = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/geteducontent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmission = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmission/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getindcontent = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getindcontent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getaboutdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getaboutdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getprivacypolicydata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getprivacypolicydata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfamedata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfamedata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const deleteuser = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "put",
      url: `${config.API}/admin/deleteuser/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteindustry = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteindustry/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteeducontent = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteeducontent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteindcontent = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteindcontent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletecontact = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletecontact/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteexam = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteexam/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletesubjectrespect = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletesubjectrespect/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefeed = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefeed/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefaq = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefaq/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletesubject = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletesubject/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletetopic = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetopic/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletetype = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetype/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletewallet = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletewallet/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteenquiry = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteenquiry/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteclass = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteclass/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const deletecontactform = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletecontactform/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletecompany = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletecompany/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const deletetestimonial = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetestimonial/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const deletelogo = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletelogo/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletebanner = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletebanner/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletetrendingvideo = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetrendingvideo/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletemarveltest = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletemarveltest/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const deleteteacher = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteteacher/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletelivecourse = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletelivecourse/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefreestuff = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefreestuff/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const deletetestseries = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetestseries/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletedirect = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletedirect/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const deletescholarship = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletescholarship/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletetab = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletetab/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletemicro = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletemicro/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleterecorded = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleterecorded/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const deleteservicedetail = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteservicedetail/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteabout = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteabout/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefame = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefame/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteservice = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteservice/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deleteevent = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteevent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletestudy = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletestudy/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const deleteblog = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deleteblog/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getuserdata = async (token, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getuserdata`,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getuserlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getuserlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getbloglist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/bloglist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcontactlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/contactlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getexamlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/examlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfeedlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/feedlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfaqlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/faqlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsubjectlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/subjectlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcourselist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/courselist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getstaticlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/staticlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettypelist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/typelist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const getlivecoursevideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlivecoursevideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getdirectcoursevideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getdirectcoursevideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlivecoursepdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlivecoursepdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getdirectcoursepdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getdirectcoursepdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefile = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefile/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletefilematerial = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletefilematerial/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecordedvideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getrecordedvideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecordedpdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getrecordedpdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreestuffvideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfreestuffvideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreestuffpdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getfreestuffpdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicrovideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmicrovideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicropdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getmicropdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getwalletlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/walletlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getcouponlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/couponlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getpurchaselist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/purchaselist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getenquirylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/enquirylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getprivacypolicylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/privacypolicylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getclasslist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/classlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreelist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/freelist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getliveteacherlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/liveteacherlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettopiclist = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/topiclist/`+id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettesttopiclist = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/testtopiclistforquestionadd/`+id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreetopiclist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/freetopiclist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicrotopiclist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/microtopiclist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsitesettinglist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/sitesettinglist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getaboutuslist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/aboutuslist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getcompanylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/companylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getstorylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/storylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettestimoniallist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/testimoniallist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getedulist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/educontentlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmissionlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/missionlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getindlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/indcontentlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getbannerlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/bannerlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const filterdate = async (data) => {
  try {
    console.log(data,"aaa")
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/filterdate`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });

    console.log(
      "afterapifetch",respData.data
    )
    return {
      userValue: respData.data.userValue,
      loading: false,

    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getagentlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/agentlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getagentearninglist = async (id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/agentearninglist/`+id,
      
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getagentstatus = async (id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/agentpaystatus/`+id,
      
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getagentaccount = async (id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/agentaccount/`+id,
      
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updateagentstatus = async (data,id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updateagentpaystatus/`+id,
      data:data,
      
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettrendingvideolist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/trendingvideolist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmarveltestlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/marveltestlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getbannerapplist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/bannerapplist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getteacherlist = async (searchvalue, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/teacherlist`,
      params: {name:searchvalue},
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getlivecourselist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/livecourselist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfreestufflist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/freestufflist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const gettestserieslist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/testserieslist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getdirectlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/directlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getscholarshiplist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/scholarshiplist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const gettablist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/tablist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getmicrolist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/microlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecordedlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/recordedlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getaboutlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/aboutlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getfamelist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/famelist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
export const getservicelist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/servicelist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const servicedetaillist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/servicedetaillist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getindustrylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/industrylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const geteventslist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/eventlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getstudylist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/studylist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getrecentlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/recentlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlogolist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/logolist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getCurrentUser = async (token, dispatch) => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API.userService}/api/currentUser`,
      headers: {
        Authorization: token,
      },
    });
    dispatch(setCurrentUser(respData.data.result));
    return true;
  } catch (err) {
    return false;
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const forgotPassword = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/forgotPassword`,
      data,
    });

    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const changePassword = async (data) => {
  try {
    let respData = await axios({
      method: "put",
      url: `${config.API}/admin/forgotPassword`,
      data,
    });

    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const logout = (history) => {
  localStorage.removeItem("admin_token");
  history.push("/Login");
};

export const resetPassword = async (data) => {
  try {
    let respData = await axios({
      method: "put",
      url: `${config.API}/admin/resetPassword`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data,
    });

    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const dashboardcourse = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/purchaselist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalpurchasedcourse: respData.data.totalpurchasedcourse,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboarduser = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/usercount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalusers: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const dashboardcoursetoday = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/purchasecount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalpurchasetoday: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboarduseryear = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/yearusercount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      yearusercount: respData.data.yearcount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboardcourseyear = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/yearcoursecount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      yearcoursecount: respData.data.yearcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboardamountyear = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/yearamountcount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      yearamountcount: respData.data.yearamountcount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const examcategorycount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/purchasedcategory`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
   
    return {
      loading: false,
      examcategorycount: respData.data.userValue,
    };
  } catch (err) {
    console.log(respData,"vvv")
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboardtotaluser = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/totalusercount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totaluserscount: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboardtotalteacher = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/totalteachercount`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalteachercount: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const dashboardtotalcourse = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/courselist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalcoursecount: respData.data.totalcourse,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const paidstudents = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/paidstudents`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      totalpaidstudent: respData.data.paidstudents,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const livecoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/livecourselist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      livecoursecount: respData.data.livecoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const testcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/testserieslist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      testcoursecount: respData.data.testcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const directcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/directlist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      directcoursecount: respData.data.directcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const scholarshipcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/scholarshiplist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      scholarshipcoursecount: respData.data.scholarshipcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const tabcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/tablist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      tabcoursecount: respData.data.tabcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const microcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/microlist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      microcoursecount: respData.data.microcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const recordedcoursecount = async (data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/recordedlist`,
      headers: {
        Authorization: localStorage.user_token,
      },
      data:data
    });
    return {
      loading: false,
      recordedcoursecount: respData.data.recordedcoursecount,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};




//testmodule
export const topiclist = async (id,data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettopiclist/`+id,
      headers: {
        Authorization: localStorage.user_token,
      },
     
    });
    return {
      loading: false,
      topiclist: respData.data.userValue,
      
    };
   
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const testtopiclist = async (id,data) => {
  // console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/gettesttopiclistfortest/`+id,
      headers: {
        Authorization: localStorage.user_token,
      },
     
    });
    return {
      loading: false,
      topiclist: respData.data.userValue,
      
    };
   
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsettopic = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/settopicdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updatesettopic = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatesettopic/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getquestiondata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getquestiondatafortest/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsetquestion = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/setquestiondata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


// export const updatequestion = async (data,id) => {
//   try {

//     let respData = await axios({
//       method: "post",
//       url: `${config.API}/admin/updatesetquestion/`+id,
//       headers: {
//         Authorization: localStorage.admin_token,
//       },
//       data:data,
//     });
//     return {
//       loading: false,
//     };
//   } catch (err) {
//     return {
//       loading: false,
//       error: err.response.data.errors,
//     };
//   }
// };

export const updatequestion = async (data,id) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("Photofile", data.image);
    bodyFormData.append("question", data.question);
    bodyFormData.append("questionnumber", data.questionnumber);
    bodyFormData.append("options", data.options);
    bodyFormData.append("setname", data.setname);
    
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatesetquestion/`+id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.admin_token,
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
//satheesh sep-5

//satheesh sep-5

export const getlivecoursebatcheslist = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/livebatcheslist/`+id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getliveallbatcheslist = async () => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/liveallbatcheslist/`,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const livecoursebatchadd = async (data) => {
  try {

   
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/livecoursebatchadd`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getlivebatchesstudentslist = async (c_id, b_id) => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/livebatchesstudentslist/`+c_id+"/"+b_id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getunallotedstudentsinbatchlist = async (c_id) => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/unallotedstudentsinbatchlist/`+c_id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getallotedstudentsinbatchlist= async (c_id) => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/allotedstudentsinbatchlist/`+c_id,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const livecoursebatchstudentadd = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/livecoursebatchstudentadd`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const downloadquestions = async (id) => {
  try {

   
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/questionexcel/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      
    });
    return {
      loading: false,
      link: respData.data.link,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getbatchdata = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getbatchdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getbactchteacher = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getbactchteacher/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.teachers,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const updatebatch = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatebatch/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletebatch = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletebatch/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};
// export const deletebatchstudent = async (id, dispatch) => {
//   //console.log('yes');
//   try {
//     let respData = await axios({
//       method: "delete",
//       url: `${config.API}/admin/deletebatchstudent/` + id,
//       headers: {
//         Authorization: localStorage.admin_token,
//       },
//     });
//     return {
//       loading: false,
//       userValue: respData.data.userValue,
//     };
//   } catch (err) {
//     return {
//       loading: false,
//       error: err.response.data.errors,
//     };
//   }
// };


export const deletebatchstudent = async (id, data) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "put",
      url: `${config.API}/admin/deletebatchstudent/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};





export const upcomingSchedules = async (id, b_id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/upcomingschedules/`+id +'/'+b_id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.user,
    };
  } catch (err) {
    return {  
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const completedSchedules = async (id, b_id) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/completedschedules/`+id+'/'+b_id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.user,
    };
  } catch (err) {
    return {  
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const allupcomingschedule = async () => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/allupcomingschedule/`,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.user,
    };
  } catch (err) {
    return {  
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const allcompletedschedules = async () => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/allcompletedschedules/`,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.user,
    };
  } catch (err) {
    return {  
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const createzoommeeting = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/createzoommeeting`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getzoommeet = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getzoommeet/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const updatezoommeeting = async (data,id) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/updatezoommeeting/`+id,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data:data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletezoommeet = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletezoommeet/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getregister = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/registeredstudentsdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const getregisterlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/registeredstudentslist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const gettestsetlist = async (filterData, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/testsetlist`,
      params: filterData,
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
     
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const addsubtopic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsubtopic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsubchapterrespectlist = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/subchapterrespectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const deletesubchapterrespect = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletesubchapterrespect/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsubtopicrespectlist = async (id, dispatch) => {
  //console.log('yes')
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/subtopicrespectdata/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const deletesubtopicrespect = async (id, dispatch) => {
  //console.log('yes');
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletesubtopicrespect/` + id,
      headers: {
        Authorization: localStorage.admin_token,
      },
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const addsubundertopic = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsubundertopic`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const addsubchaptervideo = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsubchaptervideo`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsubchaptervideodata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getsubchaptervideodata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const getsubchapterpdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getsubchapterpdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const deletesubchapterfile = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "delete",
      url: `${config.API}/admin/deletesubchapterfile/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};



export const addsubpdf = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/admin/addsubchapterpdf`,
      headers: {
        Authorization: localStorage.admin_token,
      },
      data: data,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};


export const getsubpdfdata = async (id, dispatch) => {
  console.log("yes");
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/admin/getlivecoursepdfdata/`+id
    });
    return {
      loading: false,
      userValue: respData.data.userValue,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};






