import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";
import frame from "../../styles/Containers.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    caption: "",
    image: "",
  });
  const { caption, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try{
            const {data} = await axiosReq.get(`/posts/${id}/`)
            const {image, caption, is_owner} = data;

            is_owner ? setPostData({image, caption}) : history.push('/')
        }catch(err){
            console.log(err);

        }
    };

    handleMount();
  },[history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("caption", caption);
    
    if (imageInput?.current?.files[0]) {
        formData.append("image", imageInput.current.files[0]);
      }
    
    

    try {
      await axiosReq.put(`/posts/${id}`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Container
          className={`${frame.ContentToneBorder} container-md justify-content-center`}
        >
            <h5 className={appStyles.ComicText}>Load up that image and share!!</h5>
          <Form.Group className="text-center">
            {image ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click or tap to upload an image" />
              </Form.Label>
            )}

            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              ref={imageInput}
            />
          </Form.Group>
          {errors?.image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Container className={appStyles.Content}>{textFields}</Container>
        </Container>

      </Row>
    </Form>
  );
}

export default PostEditForm;
