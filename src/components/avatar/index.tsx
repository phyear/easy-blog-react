import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.css'


const defaultProps = {
   isDomain: false,
   isCircle: true,
   width:'104px' 
};

 type avatarProps = {
     imgUrl:string,
     domain?:string,
     updateImg: any,
     
 } & Partial<typeof defaultProps>;

class Avatar extends React.Component<avatarProps> {
  static defaultProps = defaultProps;
  state = {
    loading: false,
    url: ''
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
        this.setState({ url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' });
        this.props.updateImg('https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png');
    }
  };
  
  componentDidMount() {
    const {imgUrl, isDomain, domain } = this.props;
    const url = imgUrl ? imgUrl : (isDomain ? domain + imgUrl : imgUrl);
    this.setState({ url: url });
  }

  render() {
    const { loading, url} = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
      </div>
    );
    const imageStyle = {width:this.props.width, height:this.props.width, borderRadius: this.props.isCircle ? '50%' : '0%', border: '1px dashed #d9d9d9', display: 'flex', overflow:'hidden'}
    const imgStyle = {width: this.props.width,height:this.props.width, borderRadius: this.props.isCircle ? '50%  ' : '0%'}
    console.log(imageStyle)
    return (
      <div style = {imageStyle}>
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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