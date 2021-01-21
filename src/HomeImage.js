import React from 'react';
import './HomeImage.css';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


function HomeImage() {
    const EnhancedSwipeableViews = autoPlay(SwipeableViews);

    return (
        <div>
            <EnhancedSwipeableViews enableMouseEvents interval={4000}>
                <img className="homeImage" src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/grocery/ns/bnr/GW-Hero_ns_3000x1200._CB429123021_.jpg" alt=""/>
                <img className="homeImage"　src="https://images-fe.ssl-images-amazon.com/images/G/09/kindle/journeys/MGVjYjdhYTct/MGVjYjdhYTct-OGVjNTJmZjgt-w3000._CB417511840_.jpg" alt=""/>
                <img className="homeImage"　src="https://images-fe.ssl-images-amazon.com/images/G/09/Digital_Video/Xsite_ever/TVOD/TVOD_Evergreen_GW_Desktop_Hero_Redesign_3000x1200._CB412046937_.jpg" alt=""/>
                <img className="homeImage"　src="https://images-fe.ssl-images-amazon.com/images/G/09/AmazonMusic/2020/ACQ/Evergreen/Gateway/111720/JP-JP_102020_ClaimChange_60to70_ACQ_GW_Hero_D_3000x1200_CV4._CB415332451_.jpg" alt=""/>
            </EnhancedSwipeableViews>
        </div>
    )
}

export default HomeImage;
