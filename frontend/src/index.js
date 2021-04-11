import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Website from './js/Website'
ReactDOM.render(
    <Router>
        <Website />
    </Router>,
    document.getElementById('root')
)