import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FeatureCard {
  title: string;
  description: string;
  pill?: string;
}

interface MethodCard {
  name: string;
  principle: string;
  steps: string[];
  risk: string;
  linkLabel: string;
}

interface RiskItem {
  title: string;
  detail: string;
  mitigation: string;
}

interface QAItem {
  q: string;
  a: string;
}

interface QuizItem {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface TermItem {
  term: string;
  definition: string;
}

interface UnityLinks {
  simulation: string;
  thermal: string;
  co2: string;
}

interface ContentPayload {
  hero: {
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  featureCards: FeatureCard[];
  methodCards: MethodCard[];
  riskItems: RiskItem[];
  qaItems: QAItem[];
  quizItems: QuizItem[];
  termItems: TermItem[];
  unityLinks: UnityLinks;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '可燃冰开采机器人科普平台';

  hero?: ContentPayload['hero'];
  featureCards: FeatureCard[] = [];
  methodCards: MethodCard[] = [];
  riskItems: RiskItem[] = [];
  qaItems: QAItem[] = [];
  quizItems: QuizItem[] = [];
  termItems: TermItem[] = [];
  unityLinks: UnityLinks = { simulation: '', thermal: '', co2: '' };

  quizState = {
    showAnswers: false,
  };

  loading = true;
  loadError = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ContentPayload>('assets/data/content.json').subscribe({
      next: (data) => {
        this.hero = data.hero;
        this.featureCards = data.featureCards || [];
        this.methodCards = data.methodCards || [];
        this.riskItems = data.riskItems || [];
        this.qaItems = data.qaItems || [];
        this.quizItems = data.quizItems || [];
        this.termItems = data.termItems || [];
        this.unityLinks = data.unityLinks || { simulation: '', thermal: '', co2: '' };
        this.loading = false;
      },
      error: () => {
        this.loadError = '内容加载失败，请稍后重试或检查 assets/data/content.json。';
        this.loading = false;
      },
    });
  }

  toggleQuizAnswers() {
    this.quizState.showAnswers = !this.quizState.showAnswers;
  }
}