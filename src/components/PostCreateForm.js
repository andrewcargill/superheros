import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../components/Asset";

import Upload from "../assets/upload.jpg";
import frame from "../styles/Containers.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../api/axiosDefaults";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    caption: "",
    image: "",
  });
  const { caption, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

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
    formData.append("image", imageInput.current.files[0]);
    
    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* frame = ../styles/Containers.module*/}
      {/* appStyle = ../App.module*/}
      {/* btnStyles = ../styles/Button.module.css*/}

      {/* Main Container*/}
      <Container className={`container-md justify-content-center`}>
        <Row>
          {/* Main Content Container*/}
          <Container
            className={`${frame.ContentToneBorder} container-md justify-content-center text-center`}
          >
            <h5 className={appStyles.ComicText}>
              let's share what's been happening!
            </h5>
            <Form.Group className="text-center">
              {/* Image Container*/}

              {image ? (
                <Container
                  className={`${frame.ContainerWhiteThinBorder} container-md justify-content-center text-center`}
                >
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${appStyles.InfoText} ${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                </Container>
              ) : (
                <Container
                  className={`${frame.ContainerWhiteThinBorder} container-md justify-content-center text-center`}
                >
                  <Form.Label
                    className={`${appStyles.InfoText} d-flex justify-content-center`}
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      message="Click the hero to upload an image"
                    />
                  </Form.Label>
                </Container>
              )}
              <div className="d-flex justify-content-center">
              <Form.File
                className={`${appStyles.InfoText}`}
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
              </div>
            </Form.Group>
            
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group className="d-flex justify-content-center">
                <Form.Label className="d-none">Caption</Form.Label>

                <Form.Control
                  type="text"
                  name="caption"
                  className={`${appStyles.InfoText} ${appStyles.Input}`}
                  placeholder="Add the caption..."
                  value={caption}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.caption?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            
            {/* Two Buttons Layout - Stacks on mobile */}
            <div className="text-center">
              {/* Row with 2 columns - 1 col per button*/}
              <Row xs={1} md={2}>
                <Col className="col-md-6">
                  <Button
                    className={`${appStyles.InfoText} ${btnStyles.ButtonYellow} ${btnStyles.Medium} text-uppercase`}
                    onClick={() => history.goBack()}
                  >
                    cancel!
                  </Button>
                </Col>
                <Col className="col-md-6">
                  <Button
                    className={`${appStyles.InfoText} ${btnStyles.ButtonYellow} ${btnStyles.Medium} text-uppercase`}
                    type="submit"
                  >
                    save it!
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </Container>
    </Form>
  );
}

export default PostCreateForm;
