import { Component, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    activeVideoId;

    constructor( private eleRef: ElementRef, private modalService: NgbModal ) { }

    ngOnInit(): void {
    }

    // video
    video = [
        {
            image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
            data: 'data 1',
            video: 'Zhxmsh4szj4'
        },
        {
            image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            data: 'data 2',
            video: 'rwNpKnPKnYE'
        },
        {
            image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            data: 'data 3',
            video: 'Zhxmsh4szj4'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg',
            data: 'data 4',
            video: 'rwNpKnPKnYE'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            data: 'data 5',
            video: 'Zhxmsh4szj4'
        },
        {
            image: 'https://static.toiimg.com/thumb/msid-67868104,width-800,height-600,resizemode-75,imgsize-1368689,pt-32,y_pad-40/67868104.jpg',
            data: 'data 6',
            video: 'rwNpKnPKnYE'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
            data: 'data 7',
            video: 'Zhxmsh4szj4'
        }
    ]
    leftClick(){
        var last_item = this.video.slice(-1);
        this.video.splice(-1,1);
        this.video.unshift({"image": last_item[0].image, "data": last_item[0].data, "video": last_item[0].video});
    }
    rightClick(){     
        var first_item = this.video[0];
        this.video.shift();
        this.video.push({"image":first_item.image, "data": first_item.data, "video": first_item.data});   
    }

    // video popup
    openVideoClick(videopopup,videoId){
        this.activeVideoId = videoId;
        this.modalService.open(videopopup, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    }
}