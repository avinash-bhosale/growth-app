import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
    DatePicker,
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Upload,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class GrowthForm extends React.Component {
    constructor(props){
        super(props)
    }
    
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        fileList: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.addGrowth(this.props.index, values);
            }

        });
    };

    handleSelectChange = value => {
        this.props.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult, fileList } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
    
        return (
            <div className="container">
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label={
                            <span>
                                Height&nbsp;
                            </span>
                        }
                        >
                        {
                            getFieldDecorator('height', {
                                rules: [{ required: true, message: 'Please input user height!', whitespace: true }],
                            })(<Input />)
                        }
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                Weight&nbsp;
                            </span>
                        }
                        >
                            {
                                getFieldDecorator('weight', {
                                    rules: [{ required: true, message: 'Please input user weight!', whitespace: true }],
                                })(<Input />)
                            }
                    </Form.Item>
                    <Form.Item label="Date">
                        {getFieldDecorator('date', {
                            rules: [{ required: true, message: 'Please select recorded Date!' }],
                        })
                        (<DatePicker />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default GrowthForm;
