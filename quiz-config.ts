export class QuizConfig {
    allowBack: boolean;
    pageSize: number;
  
    showPager: boolean;
    constructor(data: any) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.pageSize = data.pageSize;
        this.showPager = data.showPager;
    }
}
