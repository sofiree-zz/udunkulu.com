import React, { useState } from "react";
import { Finish } from '../Finish'
import { Preview } from '../Preview'
import { Upload } from '../Upload'
import { UploadingPage } from '../UploadingPage'
import Stepper from "react-stepper-horizontal";
import { createAlbum } from "../../../../Api";
import axios from "axios";

export function UploadForm() {
  const [formInfo, setformInfo] = useState({
    albumCover: null,
    title: '',
    description: '',
    song: null,
    albumId: null,
    artistId: 1,
    mood: '',
    genre: '',
    release: '',
    feature: '',
    uploadStatus: ''
  })
  // const [value] = React.useContext(FormContext);
  const [currentPage, setCurrentPage] = useState(0);
  const sections = [
    { title: 'Add Song', onClick: () => setCurrentPage(1) },
    { title: 'Preview', onClick: () => setCurrentPage(2) },
    { title: 'Progress', onClick: () => setCurrentPage(3) },
    { title: 'Finish' }
  ];
  const handleSubmit = async (e) => {
    // this code sends 
    e.preventDefault();
    console.log(formInfo.albumCover)
    const form = new FormData()
    // form.append('title',formInfo.title);
    // form.append('artistId',formInfo.artistId);
    form.append('coverArt',formInfo.albumCover);
    var token = localStorage.getItem('token');
    const config = {
      headers: { 
          token: token,
          headers: {
        'Content-Type': 'multipart/form-data'
      }
      }
  };
    
    axios.post('https://udunkulu-api.herokuapp.com/api/v1/artists/artistId/albums',form,config).then(console.log("hello")).catch(console.log("nooo"))
    // try {
    //   const response = await createAlbum(
    //     form
    //   );
    //   if (response.data.header) {
    //     console.log(response)
        
    //   }
    // } catch (error) {
      
    // }
    // console.log(value);
  };
  const next = () =>setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  const handleAlbumCoverSelect = (e) =>{
    var file = e.target.files[0];
    // setformInfo(formInfo.song = file);
    setformInfo({
      ...formInfo,
      albumCover: file
    });
    e.target.parentElement.nextElementSibling.textContent = file.name;
  }
  const handleSongUpload = (e) =>{
    var file = e.target.files[0];
    // setformInfo(formInfo.song = file);
    setformInfo({
      ...formInfo,
      song: file
    });
    next()
  }
  const handleFieldOnChange = (e) =>{
    const value = e.target.value;
    setformInfo({
      ...formInfo,
      [e.target.name]: value
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Stepper
        steps={sections}
        activeStep={currentPage}
        activeColor="#FFA700"
        defaultBarColor="#434343" 
        completeColor="#FFA700"
        completeBarColor="#FFA700"
        completeTitleColor="#FFA700"
        activeTitleColor="#FFA700"
        defaultBorderWidth= {	500}
        lineMarginOffset = {0}
        defaultTitleColor = '#434343'
        defaultColor = '#434343'
        circleFontColor = '#a7a7a700'
        disabledSteps={ [4] }
        size= {25}

       />
        {currentPage === 0 && (
          <>
            <Upload handleAlbumCoverSelect={handleAlbumCoverSelect} handleSongUpload={handleSongUpload} handleFieldOnChange={handleFieldOnChange} formInfo={formInfo} />
            <button onClick={next}>Next</button>
          </>
        )}
        {currentPage === 1 && (
          <>
          <Preview  next={next} prev={prev} formInfo={formInfo}  />
          </>
        )}
        {currentPage === 2 && (
          <>
          {console.log(formInfo)}
          <UploadingPage  next={next} prev={prev} />
          
          </>
        )}
        {currentPage === 3 && (
          <>
            <Finish />
          </>
        )}
      </form>
    </div>
  );
}
