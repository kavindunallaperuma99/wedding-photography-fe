import { PortfolioService } from './../admin/services/portfolio.service';
import { FileUploadService } from './../admin/services/file-upload.service';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../admin/model/file-upload.model';
import { Observable } from 'rxjs';
import { Portfolio } from '../admin/model/portfolio.model';

@Component({
  selector: 'app-portfolio-upload',
  templateUrl: './portfolio-upload.component.html',
  styleUrls: ['./portfolio-upload.component.css'],
})
export class PortfolioUploadComponent implements OnInit {
  isUploading: boolean = false;

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage: number = 0;

  portfolios$: Observable<Portfolio[]>;

  constructor(
    private uploadService: FileUploadService,
    private portfolioService: PortfolioService
  ) {
    this.portfolios$ = this.portfolioService.get();
  }

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload();
  }

  deleteItem(id: string) {
    this.portfolioService.delete(id).subscribe((res) => {
      if (res.success) {
        this.portfolios$ = this.portfolioService.get();
      }
    });
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);

        let fileName = String(
          new Date().toISOString().slice(0, 10) + Date.now()
        );

        this.isUploading = true;

        this.uploadService
          .pushFileToStorage(this.currentFileUpload, fileName)
          .subscribe(
            (percentage) => {
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            (error) => {
              console.log(error);
            },
            () => {
              this.uploadService.downloadURL.subscribe((url: string) => {
                if (url) {
                  console.log('subs url', url);

                  this.isUploading = false;
                  // this.currentEvent.imageURL = url;
                  //this.updateImageURL(this.user.id, url);
                  this.uploadService.downloadURL.next('');

                  this.currentFileUpload = undefined;

                  this.portfolioService
                    .create({
                      fileName: fileName,
                      url: url,
                      orderId: 0,
                    })
                    .subscribe((res) => {
                      this.portfolios$ = this.portfolioService.get();
                    });
                }
              });
            }
          );
      }
    }
  }
}
