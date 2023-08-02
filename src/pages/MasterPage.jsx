import { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { Input, Space, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import * as url from '../stores/services/url';
import './MasterPage.css';

const BoxUrl = lazy(()=>import('../components/BoxUrl'));

const MasterPage = () => {
  const APP_URL = process.env.REACT_APP_URL;
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [placeholder] = useState("https://your-long-url*");
  const [placeholderId] = useState("your-custom-link-id*");
  const [inputValueId, setInputValueId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [showResultContainer, setShowResultContainer] = useState(false);

  useEffect(() => {
    if (resultUrl.length > 1) setShowResultContainer(true);
    else setShowResultContainer(false);
  }, [resultUrl]);

  const sendNotif = (type, message) => {
    switch (type) {
      case 'info':
        messageApi.info(message);
        break;
      case 'success':
        messageApi.success(message);
        break;
      case 'error':
        messageApi.error(message);
        break;
      default:
        break;
    }
  };
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    sendNotif(type, 'Link copied!');
  };

  const fetchCreateUrl = async () => {
    try {
      const res = await dispatch(url.createLink(inputValueId, inputValue));
      
      if (res.status === 200) setResultUrl(APP_URL + "/" + res.data);
      else sendNotif("error", res.message);
    } catch (err) {
      console.log("err ", err);
    }
  };

  const shortenInputOnChange = (obj) => {
    setInputValue(obj.target.value);
  };

  const inputIdOnChange = (obj) => {
    setInputValueId(obj.target.value);
  };

  return (
    <section className="pt-5 pb-6">
      {contextHolder}
      <div className="container">
        <div className="row mobile-mt-3">
          <div className="col-md-8 mx-auto text-center">
            <h1>Launch yours!</h1>
            <p className="lead mb-5">Sambung.link is a platform for shortening long URLs to be more concise and easy to remember. With Sambung.link, you can quickly generate short links that can be used to easily share URLs.</p>
            <Input 
              className="input-custom-id" 
              addonBefore="https://sambung.link/" 
              placeholder={placeholderId}
              onChange={inputIdOnChange} />
            <LinkOutlined style={{ fontSize: '32px', color: 'black', marginTop: '12px', marginBottom: '12px' }} />
            <Space.Compact style={{ width: '100%' }}>
              <Input 
                className="input-custom"
                placeholder={placeholder}
                onChange={shortenInputOnChange}
                onPressEnter={fetchCreateUrl}
              />
              <Button 
                text={"Launch"}
                className={"btn-success btn-with-input"}
                onClick={fetchCreateUrl}
              />
            </Space.Compact>
            {showResultContainer && (
              <BoxUrl 
                url={resultUrl} 
                onClick={() => {
                  copyToClipboard(resultUrl, 'success');
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPage;
