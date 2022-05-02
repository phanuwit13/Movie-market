import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public basePath = this.http.imgBasePath;
  public movie = [];
  public addProduct: any = [];
  public price = 0;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.shearchMovie('a');
  }

  async shearchMovie(key) {
    if (key == '') {
      key = 'a';
    }
    console.log(key);
    let httpRespon: any = await this.http.get(key == '' ? 'a' : key);
    if (httpRespon.connect) {
      this.movie = await httpRespon.response.results;
    } else {
    }
    console.log(httpRespon.response.results);
  }
  showProduct(value) {
    console.log(value);
    // this.price.setValue(0)
    this.addProduct = value;
  }
  getValue() {
    return JSON.parse(window.localStorage.getItem('market'));
  }
  productAddStore(item) {
    let old = this.getValue();
    this.addProduct.price = item;
    // console.log(this.addProduct)
    if (old !== null) {
      var valueArr = old.map(function (item) {
        return item.id;
      });
      if (valueArr.indexOf(this.addProduct.id) == -1) {
        window.localStorage.setItem(
          'market',
          JSON.stringify([...old, this.addProduct])
        );
        Swal.fire('', 'เพิ่มสินค้าสำเร็จ', 'success');
      } else {
        Swal.fire('', 'มีสิ้นค้าชิ้นนี้ในร้านแล้ว', 'error');
      }
    } else {
      window.localStorage.setItem('market', JSON.stringify([this.addProduct]));
      Swal.fire('', 'เพิ่มสินค้าสำเร็จ', 'success');
    }
    this.price = 0;
  }
}
