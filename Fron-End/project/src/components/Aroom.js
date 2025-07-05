import React from 'react'

export default function Aroom(props) {
  return (
    
    <div id="portfoliolist">
    <div class="portfolio logo1" data-cat="logo">
        <div class="portfolio-wrapper">
            <img src={props.img} alt="Image 2" />
            <div class="label">
                <div class="label-text">
                    <p class="text-title">
                        {props.title}</p>
                    <span class="text-category">{props.des}</span>
                </div>
                <div class="label-bg">
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
