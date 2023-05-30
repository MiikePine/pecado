import React from "react";
import Button from "./Button";
import { TfiClose } from "react-icons/Tfi";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import  Input from "./Input";
import { useState } from "react";
import UploadComponent from "./UploadComponent";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const schema = Yup.object().shape({
    email: Yup.string().email('Veuillez entrer un email valide').required('Email est requis'),
    name: Yup.string().required('Prenom est requis'),
    lastName: Yup.string().required('Nom est requis'),
    adresse: Yup.string().required('Adress est requis'),
    postCode: Yup.string().required('Code Postal est requis'),
    city: Yup.string().required('Ville est requis'),
    company: Yup.string().required('Company est requis'),
  });
 

  const Register = (props) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });
  
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [isOpen, setIsOpen] = useState(true);


    const handleClose = () => {
      setIsOpen(false);
    };


    const onFilesAccepted = (files) => {
      setAcceptedFiles(files.map((file) => file.path));
    };

    const files = acceptedFiles.map((file) => <li key={file.path}>{file.path}</li>);
   
   
    const onSubmit = async (data) => {
  

      if (acceptedFiles.length > 0) {
        const postData = {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          adress: data.adress,
          postCode: data.postCode,
          city: data.city,
          company: data.company,
          dateValue: data.dateValue,
          logo: acceptedFiles[0].path,
          actif: data.actif
        
          
        };
        console.log(acceptedFiles[0].path);
        try {
          const response = await axios.post("http://localhost:3000/posts", postData);
          console.log("", response.data);
          props.onRegisterSuccess(response.data);
          toast.success("Membre ajouté avec succès");
        } catch (error) {
          console.error("Failed to submit form:", error);
          }  }
      };


    return ( 
      isOpen && (
        <div className="w-screen md:w-2/6 h-full top-0 fixed right-0 z-50 flex items-center overflow-y-auto mb-10">
        <div className="flex-1 h-full border-2 border-neutral-200 overflow-y-auto bg-white p-4 relative">
            <div className="flex px-0">         
                    <div className="ml-auto mr-3 mt-4 pb-0 mb-0">                    
                    <button onClick={handleClose}>
                            <TfiClose size={30} className="text-red"></TfiClose>
                        </button>
                    </div>
            </div> 
            <div className="text-center"> 
                <h1 className="text-3xl mb-8 mt-2">Ajouter Member</h1>
            </div>

            {/* Formulaire */}
    <form
                                onSubmit={handleSubmit(onSubmit)}>
             <div className="flex-col ml-8 mr-8 md:ml-0 md:mr-0 md:flex-row my-4">
                            <div className="mb-4">

                                <Input
                                id="Name"
                                register={register("name")}
                                type="Name"
                                placeholder="Name"
                                error={errors.name}/>
                                {errors.name && (
          <span className="text-xs text-red mt-2">{errors.name.message}</span>
            )}
                            </div>
                                <Input
                                id="Last Name"
                                register={register("lastName")}
                                type="Last Name"
                                placeholder="Last Name"
                                error={errors.lastName}/>
                                {errors.lastName && (
          <span className="text-xs text-red mt-2">{errors.lastName.message}</span>
            )}
            </div>

            <div className="flex-col ml-8 mr-8 md:ml-0 md:mr-0 md:flex-row gap-2 my-4">
                        <div className="mb-4">
                                <Input
                                id="Email"
                                register={register("email")}
                                type="Email"
                                placeholder="your@email.com"
                                error={errors.email}/>
                                {errors.email && (
          <span className="text-xs text-red mt-2">{errors.email.message}</span>
            )}
                        </div>
                        
                                <Input
                                id=" Adresse"
                                register={register("adresse")}
                                type="Adress"
                                placeholder="Adresse"
                                error={errors.adress}/>           
                {errors.adress && (
          <span className="text-xs text-red mt-2">{errors.adresse.message}</span>
            )}
            </div>

            <div className="flex flex-col ml-8 mr-8 md:ml-0 md:mr-0 md:flex-row gap-2 my-4">
                                <div className="w-full md:w-1/2">           
                                    <Input
                                        id="Post Code"
                                        register={register("postCode")}
                                        type="Post Code"
                                        placeholder="postCode"
                                        error={errors.postCode}/>
                                        {errors.postCode && (
                                    <span className="text-xs text-red mt-2">{errors.postCode.message}</span>)}
                                </div>

                                <div className="w-full md:w-1/2"> 
                                    <Input
                                        id=" City"
                                        register={register("city")}
                                        type="City"
                                        placeholder="City"
                                        error={errors.city}/> 
                                        {errors.city && (
                                    <span className="text-xs text-red mt-2">{errors.city.message}</span>)}   
                                </div>
            </div>

            <div className="flex flex-col ml-8 mr-8 md:ml-0 md:mr-0 md:mb-12 md:flex-row gap-2 my-4">
                        <div className="w-full md:w-1/2">
                                <Input
                                    id="company"
                                    register={register("company")}
                                    type="Compagny"
                                    placeholder="Compagny"
                                    error={errors.compagny}/>
                                    {errors.compagny && (
                                <span className="text-xs text-red mt-2">{errors.compagny.message}</span>)}



                        </div>   
                        <div className="w-full md:w-1/2">    
                                     
                                <Input
                                id="Date"
                                register={register("dateValue")}
                                type="Date"
                                placeholder="Membre depuis"
                                error={errors.date}/>
                        </div> 
                        {/* Formulaire */}              
            </div>  


                <div>
                    <UploadComponent onFilesAccepted={onFilesAccepted}/>
                </div>            
                <div className="mt-8 ml-8 mr-8 md:ml-0 md:mr-0 my-8">   
                  <Button create="Create" className="text-lg " onClick={handleSubmit(onSubmit)}/> 
                </div>  
                                        
        </form>
                
        </div>
    </div>


      )
        )}

export default Register;