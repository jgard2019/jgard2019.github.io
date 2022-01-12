class DonutClass {

    constructor(){
        this.donutCount = 0;
        
    
        this.autoClickerCost1 = 100;
        this.numOfAutoClickers = 0;
        this.autoInterest = 0.2;
    
        this.multiClick = 1;
        this.upgradeClickerPrice = 10;
        this.clickInterest = 0.2;
    
        this.autoMultiUpgradeCost = 250;
        this.autoMultiplier = 1;
        this.autoMultiInterest = 0.25;
    }
    
        makeDonuts(clicks) {
            clicks = this.multiClick * clicks;
            this.donutCount += clicks;
    
            console.log(this.autoMultiplier + "multiplier");
            console.log(this.numOfAutoClickers + "clickers");
        }
    
        autoDonut(){
            for(let i=this.numOfAutoClickers; i>0; i--) {
                this.donutCount += this.autoMultiplier;
            }
        }
    
        upgradeClickerLevel(){
            this.donutCount = this.donutCount - this.upgradeClickerPrice;
            this.upgradeClickerPrice += this.upgradeClickerPrice * this.clickInterest;
            this.clickInterest += this.clickInterest * 0.05;
            this.multiClick ++;
        }
    
        buyAutoClicker(){
            this.donutCount = this.donutCount - this.autoClickerCost1;
            this.autoClickerCost1 += this.autoClickerCost1 * this.autoInterest;
            this.autoInterest += this.autoInterest * 0.05;
            this.numOfAutoClickers ++;
        }
    
        multiplyAutoClicker(){
            this.donutCount = this.donutCount - this.autoMultiUpgradeCost;
            this.autoMultiUpgradeCost += this.autoMultiUpgradeCost * this.autoMultiInterest;
            this.autoMultiInterest += this.autoMultiInterest * 0.05;
            this.autoMultiplier++;
            console.log(this.autoMultiplier);
        }
    }   
    export {DonutClass}