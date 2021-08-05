<script>
import { Scatter } from 'vue-chartjs';
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
      console.log(this.tutorials.length);
      for (let i = 0; i < this.tutorials.length; i++){
        console.log(this.tutorials[i].name);
      }
    },
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
          this.printdata();
          this.renderChart({
              labels: ['Blue'],
              datasets: [{
              label: 'Scatter Dataset',
              data: [{x: Number(this.tutorials[0].X),y: Number(this.tutorials[0].Y)}, {x: Number(this.tutorials[1].X),y: Number(this.tutorials[1].Y)}, 
                    {x: Number(this.tutorials[2].X),y: Number(this.tutorials[2].Y)},{x: Number(this.tutorials[3].X),y: Number(this.tutorials[3].Y)},
                    {x: Number(this.tutorials[4].X),y: Number(this.tutorials[4].Y)},{x: Number(this.tutorials[5].X),y: Number(this.tutorials[5].Y)}],
              backgroundColor: 'rgb(0, 0, 0)'
           }],
          },{
          options: {
            responsive: true,
            maintainAspectRatio: false
            }
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.retrieveTutorials();

    


  }
}
</script>

