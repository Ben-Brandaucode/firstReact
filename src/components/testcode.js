return (
    <div className="container">
        <div className="row">
            <div className="col">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
                <h2>Contact Us</h2>
                <hr />
            </div>
        </div>
        <div className="row row-content align-items-center">
            <div className="col-sm-4">
                <h5>Our Address</h5>
                <address>
                    1 Nucamp Way<br />
                    Seattle, WA 98001<br />
                    U.S.A.
                </address>
            </div>
            <div className="col">
                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
            </div>
        </div>
        <div className="row row-content">
            <div className="col-12">
                <h2>Send us your Feedback</h2>
                <hr />
            </div>
            <div className="col-md-10">
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstName" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstName" id="firstName" name="firstName"
                            placeholder="First Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                            />

                            <Errors
                                className= "text-danger"
                                model=".firstName"
                                show='touched'
                                component='div'
                                messages={{
                                    required: 'Reuired',
                                    minLength: 'Must be at least 2 characters.',
                                    maxLength: 'Must be 15 characters or less.'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
@@ -84,7 +106,23 @@ class Contact extends Component {
                            <Control.text model=".lastName" id="lastName" name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                            />
                            <Errors
                                className= "text-danger"
                                model=".lastName"
                                show='touched'
                                component='div'
                                messages={{
                                    required: 'Reuired',
                                    minLength: 'Must be at least 2 characters.',
                                    maxLength: 'Must be 15 characters or less.'
                                }}
                                />

                        </Col>                        
                    </Row>
@@ -94,8 +132,25 @@ class Contact extends Component {
                            <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                            placeholder="Phone number"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(10),
                                maxLength: maxLength(15),
                                isNumber
                            }}
                            />

                            <Errors
                                className= "text-danger"
                                model=".phoneNum"
                                show='touched'
                                component='div'
                                messages={{
                                    required: 'Reuired',
                                    minLength: 'Must be at least 10 numbers.',
                                    maxLength: 'Must be 15 numbers or less.',
                                    isNumber: 'Must be a number'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
@@ -104,7 +159,21 @@ class Contact extends Component {
                            <Control.text model=".email" id="email" name="email"
                            placeholder="Email"
                            className="form-control"
                            validators={{
                                required,
                                validEmail
                            }}
                            />
                            <Errors
                                className= "text-danger"
                                model=".email"
                                show='touched'
                                component='div'
                                messages={{
                                    required: 'Reuired',
                                    validEmail: 'Invalid email address'
                                }}
                                />

                        </Col>
                    </Row>