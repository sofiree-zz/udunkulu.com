import './ProgressBar.css';

const ProgressBar =()=>{
    return(
        <div>
            <div class="progress" id="progress">
                <div class="progress-bar"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="progress-bar"></div>
                <div class="rounded-circle" id="zero"></div>
                <div class="rounded-circle" id="fifty"></div>
                <div class="rounded-circle" id="seventy"></div>
                <div class="rounded-circle" id="hundred"></div>
            </div>
        </div>
    );
}

export {ProgressBar}