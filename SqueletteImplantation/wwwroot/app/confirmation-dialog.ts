﻿import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

/**
 * @title Dialog with header, scrollable content and actions
 */

@Component({
  selector: 'dialog-content-example-dialog',
  template: `<h2 mat-dialog-title>Delete all</h2>
<mat-dialog-content>Are you sure?</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <!-- Can optionally provide a result for the closing dialog. -->
  <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>`,
})
export class ConfirmationDialog {}
