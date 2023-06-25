import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
    counter = 0;

    options = { autoScroll: true, autoScrollTime: 5 };

    items = [
        {
            image: '/images/image5.jpeg',
            header: 'Bristoe Station Heritage Park',
            description: 'June 19, 2021',
            href: '#'
        },
        {
            image: '/images/CBBT.jpeg',
            header: 'Chesapeake Bay Bridge Tunnel',
            description: 'October 2009',
            href: '#'
        },
        {
            image: '/images/Group.jpg',
            header: 'George Washington Birthplace National Monument',
            description: 'November 10, 2018',
            href: '#'
        },
        {
            image: '/images/IMG_0844.JPG',
            header: 'Highland County, VA',
            description: 'June 2014',
            href: '#'
        },
        {
            image: '/images/IMG_0552.JPG',
            header: 'George Washington Birthplace National Monument',
            description: 'Feb 2014',
            href: '#'
        },
        {
            image: '/images/Photo-Op.jpg',
            header: 'Mattamuskeet National Wildlife Refuge',
            description: 'Feb 2013',
            href: '#'
        },
        {
            image: '/images/IMG_3301.JPG',
            header: 'Occoquan Bay National Wildlife Refuge',
            description: 'April 23. 2016',
            href: '#'
        },
        {
            image: '/images/P1020092.jpeg',
            header: 'Delaware Shore',
            description: 'September 2013',
            href: '#'
        },
        {
            image: '/images/Leesylvania-Group.jpeg',
            header: 'Leesylvania State Park',
            description: 'May 14, 2016',
            href: '#'
        }
    ];

    showModal = false;
    modalDetail = {};

    handleMemberEvent(event) {
        this.showModal = true;
        this.modalDetail = event.detail;
    }

    handleOkClick() {
        this.showModal = false;
    }
}
