import React from 'react';
import ModalCard from '../UI/ModalCard'
import { Container, Box, Button, Field, Label, Control, Input, Help } from 'bloomer'

export default (props) => {
    return (
        <ModalCard title="Add server" visible={props.visible} onCancel={props.onCancel}>

            <Container>
                <Box>
                    <Field>
                        <Label>URL</Label>
                        <Control>
                            <Input type="text" placeholder='jenkins url' value='http://jenkins.example.com' />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Username</Label>
                        <Control>
                            <Input type="text" placeholder='Username' value='' />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input type="password" value='' />
                        </Control>
                        <Help isColor='danger'>password will be persisted as plain text<br/>It is recommended to use anonymous user only</Help>
                    </Field>
                </Box>
            </Container>
        </ModalCard>
    )
};