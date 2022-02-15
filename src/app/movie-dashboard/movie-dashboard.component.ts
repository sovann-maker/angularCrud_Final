import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { MovieModel } from './movie.model';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {

  movieValue!:FormGroup;

  movieObj:MovieModel = new MovieModel;

  movieList:any=[];

  btnSaveshow:boolean = true;

  btnUpdateshow:boolean = false;
  
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }
 

  ngOnInit(): void {
    this.movieValue = this.formBuilder.group({
      mid:[""],
      id:[],
      mname:[""],
      mrating:[""],
      mindustry:[""],
      mdate:[""]

    })
    this.getMovie();
  }

  AddMovie(){
    console.log(this.movieValue.value.mid);
    this.movieObj.mid = this.movieValue.value.mid;
    this.movieObj.mname = this.movieValue.value.mname;
    this.movieObj.mrating = this.movieValue.value.mrating;
    this.movieObj.mindustry = this.movieValue.value.mindustry;
    this.movieObj.mdate = this.movieValue.value.mdate;

    this.api.postMovie(this.movieObj).subscribe({next: (v)=>{
      console.log(v)
    },
    // error: (e)=> {
    //   console.log(e)
    //   alert("Error")
    // },
    // complete: ()=> {
    //   console.log("Movie record added!")
    //   alert("Movie record added!")
    //   this.getMovie();
    //   this.movieValue.reset();
    // }
  })
  }

  getMovie(){
    this.api.getMovie().subscribe(res=>{
      this.movieList = res;

    })
  }
  deleteMovie(data:any){
    this.api.deleteMovie(data.mid).subscribe({next: (v)=>{
      console.log(v)


    },
    // error: (e)=> {
    //   console.log(e)
    //   alert("Error")
    // },
    // complete: ()=> {
    //   console.log("Movie record deleted!")
    //   alert("Movie record deleted!")
    //   this.getMovie();
    // }
  })
  }


  editMovie(data:any){
    this.movieValue.controls["mid"].setValue(data.mid);
    this.movieValue.controls["mname"].setValue(data.mname);
    this.movieValue.controls["mrating"].setValue(data.mrating);
    this.movieValue.controls["mindustry"].setValue(data.mindustry);
    this.movieValue.controls["mdate"].setValue(data.mdate);
    this.movieObj.mid = data.mid;
    this.UpdateShowBtn();

  }



  UpdateMovie(){
    this.movieObj.mid = this.movieValue.value.mid;
    this.movieObj.mname = this.movieValue.value.mname;
    this.movieObj.mrating = this.movieValue.value.mrating;
    this.movieObj.mindustry = this.movieValue.value.mindustry;
    this.movieObj.mdate = this.movieValue.value.mdate;

    this.api.putMovie(this.movieObj,this.movieObj.mid).subscribe({next: (v)=>{
      console.log(v)
    },
    error: (e)=> {
      console.log(e)
      alert("Error")
    },
    // complete: ()=> {
    //   console.log("Movie record updated successfully!")
    //   alert("Movie record updated successfully!")
    //   this.getMovie();
    //   this.movieValue.reset();
    //   this.SaveShowBtn()
    //   this.movieObj.mid = "";
    // }
  })
  }


  UpdateShowBtn(){
    this.btnUpdateshow=true;
    this.btnSaveshow=false;
  }


  SaveShowBtn(){
    this.btnUpdateshow=false;
    this.btnSaveshow=true;
  }


  deleteAllMovie(){
    
  }
  key:string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  p:number = 1;
}
