class Form {
    constructor() {
        this.inputName = createInput("Enter your name here");    
        this.inputAnswer= createInput("Enter your option here");
        this.button = createButton("Submit");
        }

        hide(){
            this.inputName.hide();
            this.inputAnswer.hide();
            this.button.hide();
         }

    display() {

        var title = createElement('h2');
        title.html("My Quiz Game");
        title.position(430,0);

        var question = createElement('h3');
        question.html("Question: What starts and ends with letter 'E' but also has only one letter?");
        question.position(100,50);

        var option1= createElement('h3');
        option1.html("1. Everyone");
        option1.position(100,75);

        var option2= createElement('h3');
        option2.html("2. Envelope");
        option2.position(100,95);

        var option3= createElement('h3');
        option3.html("3. Estimate");
        option3.position(100,115);

        var option4= createElement('h3');
        option4.html("4. Example");
        option4.position(100,135);

        this.inputName.position(150,260);
        this.inputAnswer.position(450,260);
        this.button.position(350,300);
        
        this.button.mousePressed(()=>{
            this.inputName.hide();
            this.inputAnswer.hide();
            this.button.hide();

            player.name = this.inputName.value();
            player.answer= this.inputAnswer.value();

            contestantCount+=1;
            player.index= contestantCount;

            player.update(player.name,player.answer);
            player.updateCount(contestantCount);


        })

    }
}