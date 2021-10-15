<script>
import { Scatter} from 'vue-chartjs';

import TutorialDataService from "../services/TutorialDataService";
export default {
  extends: Scatter,
  
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
     
    };
  },
  methods: {
    printdata() {
      //console.log(this.tutorials.length);
      for (let i = 0; i < this.tutorials.length; i++){
        //console.log(this.tutorials[i].names);
      }
    },
    try_data(){
      let text = '[';
      for (let i = 0; i < this.tutorials.length; i++){
        if(i !== 0)
          text+=',';
        text+='{"x":'+Number(this.tutorials[i].X)+','+'"y":'+Number(this.tutorials[i].Y)+'}';
        //console.log(this.tutorials[i].names);
      }
      text+=']';
      //console.log(text);
      text = JSON.parse(text);
      return text;
    },
    try_name(){
      var text2 = [];
      for (let i = 0; i < this.tutorials.length; i++){
        text2[i] = this.tutorials[i].names;
        //console.log(this.tutorials[i].names);
      }
      return text2;
    },
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
          this.printdata();
          let chartdata = {
            datasets: [
              {
              label: '室內點座標圖',
              labels: this.try_name(),
              data: this.try_data(),
              backgroundColor: 'rgb(65, 105, 225)',
              
              }              
              ]
          }
          //console.log(chartdata.datasets[0].labels);
          this.renderChart(chartdata,{
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
              mode: 'index',
              callbacks: {
                  
                  title: (tooltipItems, data) => {
                    var sum = '';
                    //var name = data.datasets[0].labels;
                    //console.log(X);
                    console.log(tooltipItems[0].index);
                    tooltipItems.forEach(function(tooltipItem) {
                        sum += data.datasets[0].labels[tooltipItem.index];
                    });
                    return 'IPv6 address :' + sum;
                 },
              },
              footerFontStyle: 'normal'
           }
              
            
            
            
          
            

          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    
  },
  mounted() {
    // Overwriting base render method with actual data.
  
    this.retrieveTutorials();

    

    


  }
}
</script>

