import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.css'


const defaultProps = {
   isDomain: false,
   isCircle: true,
   width:'104px',
};

 type avatarProps = {
     imgUrl?:string,
     domain?:string,
     updateImg: any,
     value?:any,
     action?:string 
 } & Partial<typeof defaultProps>;

class Avatar extends React.Component<avatarProps> {
  static defaultProps = defaultProps;
  state = {
    loading: false,
  };

  beforeUpload = (file:any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传图片');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  handleChange = (info:any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'error') {
        this.setState({ loading: false });
    } else {
      var {isDomain, domain} = this.props;
        this.setState({ loading: false });
        const img = info.file.response;
        this.props.updateImg(img)
        this.setState({
          url : img == null ? img : (isDomain ? domain + img : img)
        })
    }
  };
  
  pingUrl = () => {
    var {imgUrl, isDomain, domain, value} = this.props;
    if(value != null){
       imgUrl = value;
    }
    return imgUrl == null ? imgUrl : (isDomain ? domain + imgUrl : imgUrl);
  }
  render() {
    const { loading} = this.state;
    const url = this.pingUrl();
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
      </div>
    );
    const imageStyle = {width:this.props.width, height:this.props.width, borderRadius: this.props.isCircle ? '50%' : '0%', border: '1px dashed #d9d9d9', display: 'flex', overflow:'hidden'}
    const imgStyle = {width: this.props.width,height:this.props.width, borderRadius: this.props.isCircle ? '50%  ' : '0%'}
    return (
      <div style = {imageStyle}>
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={this.props.action}
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {url ? <img src={url} alt="avatar" style= {imgStyle} /> : uploadButton}
      </Upload>
      </div>
    );
  }
}

export default Avatar;