import React from "react";
import { Form, Input, Button } from "antd"; 

const FormItem = Form.Item;

class PieceOfCopyForm extends React.Component {
  
  handleFormSubmit = (event) => {

    event.preventDefault();

    const headline = event.target.elements.headline.value;
    const body = event.target.elements.body.value;
    const description = event.target.elements.description.value;

    console.log("perro");
    console.log(headline, body , description);

  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit} >
          <FormItem label="Headline">
            <Input name="headline" placeholder="Put the headline of your ad here" />
          </FormItem>
          <FormItem label="Body">
            <Input name="body" placeholder="Enter the body of the copy" />
          </FormItem>
          <FormItem label="Description">
            <Input name="description" placeholder="Enter the description of the headline" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default PieceOfCopyForm;