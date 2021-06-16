import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {DOMAIN, ACTION} from '../../constant'
import {handlerUrl } from '../../utils/urlutil'

class UploadAdapter {
    loader;
    domian;
    action;
    constructor(props:any) {
        // CKEditor 5's FileLoader instance.
      this.loader = props;
      // URL where to send files.
      this.domian = DOMAIN;
      this.action = ACTION;
    }
    upload() {
      const data1 = this.loader.file.then((file) => new Promise( ( resolve, reject ) =>{
         this.uploadFile(file,resolve)
      }));
     return data1;
    }

    uploadFile(file,resolve) {
      var formData = new FormData();
      formData.append("avatar",file);
      fetch(this.action, {
        method: 'POST',
        body: formData
      })
      .then((res) => res.json())
      .then((data) => resolve({default: handlerUrl(this.domian, data)}));
    }
    abort() {
        
    }
}
const defaultProps = {
  value:''
};


type props = {
  onChangeValue:any,
} & Partial<typeof defaultProps>;

function myCustomUploadAdapterPlugin(editor) {
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
    return new UploadAdapter(loader)
  }
}

 class MyCKEdit extends Component<props> {

 

     render() {
          const custom_config = {
            extraPlugins: [ myCustomUploadAdapterPlugin ]
          }

         return (
            <CKEditor data={this.props.value} editor={ ClassicEditor } 
             config = {custom_config}
             onChange={(event, editor) => {
                const data = editor.getData()
                  this.props.onChangeValue(data);
                }}
            />
         );
     }
 }
 

 

  export default MyCKEdit;