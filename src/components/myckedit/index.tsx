import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class UploadAdapter {
    loader;
    url;
    constructor(props:any) {
        // CKEditor 5's FileLoader instance.
      this.loader = props;
      // URL where to send files.
      this.url = 'domain';
    }
    upload() {
        this.url = ''
        const data = {
            default: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
        return data;
    }

    abort() {
        
    }
}

const custom_config = {
    extraPlugins: [ MyCustomUploadAdapterPlugin ]
}
 class MyCKEdit extends Component {

     render() {
         return (
            <CKEditor data="<p>Hello from CKEditor 5!</p>" editor={ ClassicEditor } 
             config = {custom_config}
             onChange={(event, editor) => {
                const data = editor.getData()
                  console.log(data)
                }}
            />
         );
     }
 }
 

 function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
      return new UploadAdapter(loader)
    }
  }

  export default MyCKEdit;