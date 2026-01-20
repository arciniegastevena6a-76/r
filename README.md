# 可燃冰开采机器人科普应用平台 (前端 Angular)

本仓库前端已重构为科普单页应用，移除原电商/购物车等功能，采用科技蓝主题、球形机器人占位图标，并预留 Unity 场景链接占位（深海作业仿真、热激开采、CO₂ 置换）。语言为中文。

## 功能概览
- 概览与价值：可燃冰形成、分布、价值、开采挑战。
- 深海作业仿真（占位）：耐压、防腐、导航/视觉、作业流程；Unity 链接占位按钮。
- 开采方法：热激、CO₂ 置换原理与流程，风险要点，Unity 链接占位按钮。
- 环境风险与预警：甲烷泄漏、地质稳定、设备故障、生态扰动及缓解策略。
- 机器人技术与安全效率：关键子系统、冗余/自检、安全/效率、低扰动作业。
- 互动学习：FAQ、小测验（显示/隐藏答案）、术语表。

## 技术与结构
- 前端：Angular（单页锚点导航），科技蓝配色，球形机器人 SVG 占位。
- 主要文件：
  - frontend/src/app/app.component.ts — 文案/数据（可迁移到 assets/data/content.json）。
  - frontend/src/app/app.component.html — 布局与版块。
  - frontend/src/app/app.component.css — 主题与响应式样式。
- 后端目录暂未使用。

## 本地运行
```bash
cd frontend
npm install
npm start
# 访问 http://localhost:4200
```

## 生产构建
```bash
cd frontend
npm run build
# 产物输出至 frontend/dist
```

## Unity 场景链接占位
- 当前按钮为“Unity 场景（暂未上线）”，未绑定链接。
- 如需接入 WebGL 或播放器链接，可：
  1) 直接在 app.component.ts 中替换占位文案；或
  2) 新建 assets/data/content.json 维护链接与文案，然后在组件中读取（可后续追加）。

## 主题与设计
- 科技蓝深海风格；球形机器人简易 SVG 占位，可后续替换正式图标。
- 响应式适配桌面/移动。

## 后续可选改进
- 将文案/链接外置到 assets/data/content.json，便于维护。
- 若需多页面路由，可按 /home /simulation /methods /risk-alerts /robotics /learn 拆分组件与路由。