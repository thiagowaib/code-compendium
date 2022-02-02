import React from 'react'

import Header from '../components/Header';
import Tasks from '../components/Tasks';

export default class TaskPage extends React.Component {
    render() {
        return (
            <section>
                <Header />
                <Tasks />
            </section>
        )
    }
}
