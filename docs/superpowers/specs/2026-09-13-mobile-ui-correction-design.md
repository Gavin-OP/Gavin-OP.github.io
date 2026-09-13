# Mobile UI 精细校正设计规格

## 目标

在已提交的 mobile portfolio 首版基础上，修复 phone 端实际渲染与已确认设计不一致的问题。Desktop/laptop（1024px 及以上）的视觉与交互保持不变；tablet（768px 至 1023px）只保留既有的防破版与触控适配。

## 已确认的调整

### 1. Profile 与 Intern 渐变分隔线

- 保持 Profile 与 Intern 之间的总垂直距离为约 5.5rem（88px）。
- 将 gradient line 放置在 Profile 正文与 Intern 标题的正中心，上下边距各为 2.75rem。

### 2. Intern 经历区

- 移除 `01 / 04` 数字文本，采用 48px（3.5rem）精细胶囊轨道 + 25% 平滑滑动块指示当前滚动进度。
- 完整恢复 4 家实习的所有原始工具、快捷键及软件名：
  - Polymer: `[Python]` `.groupby(), .merge(), .assign()`, `[Git]` `git pull, git branch, git rebase`, `[Docker]` `docker image, docker run`
  - FutureX: `[Markdown]` `##, -, **`, `[PowerPoint]` `ctrl+E, islide`, `[Word]` `ctrl+C, ctrl+V`
  - Zhihu: `[SQL]` `SELECT *;`, `[R]` `read.csv()`, `[Excel]` `ctrl+C ctrl+V`
  - PwC: `[Bloomberg]` `F1 F1`, `[Word]` `ctrl+F`, `[Excel]` `ctrl+shift+L, ctrl+shift+>`
- 应用已确认的前缀高亮样式，使软件类别名称作为高亮徽章，命令保持 monospace。
- Desktop 端完整保留原始 details 多行文本展示，不丢失任何信息。

### 3. Project 项目区

- 移除固定 `30rem`（480px）大高度，采用紧凑自然的自适应布局（`min-height: 22rem; height: auto`），解决宽扁配图导致的卡片空旷不协调问题。
- 与 Intern 进度条风格统一，移除 `01 / 02` 数字，采用同款 56px 胶囊轨道 + 50% 滑块。
- **WeChat 背景图融合**：使用 `::before` 伪元素将 `/image/wechat_analysis_backgroud.png` 作为暗调纹理层（Luminosity 模式），叠加 135° 深色防眩渐变（`linear-gradient(135deg, rgba(8, 9, 13, 0.98) 35%, rgba(8, 9, 13, 0.75) 100%)`），让背景图氛围自然融入卡片，正文字体保持纯白高对比度。
- **图文视窗精准对齐**：标题、正文描述、9.5rem 暗色图表槽及底部按钮在两张卡片间严格对齐。
- **轻量微圆图标按钮**：纯图标呈现，采用 2.375rem 轻量微磨砂圆环（`rgba(255, 255, 255, 0.05)`），优雅融入卡片右下角。
- **手机端无无效交互**：在手机模式下禁用卡片容器的 click 响应与 active 样式微动。
- 真实图表继续以 contain 方式完整展示，避免裁切。

### 4. Contact 联系区

- 采用方案 C（留白内嵌下划线）：外层保留 1.25rem 黄金呼吸留白，`.site-footer__list` 每一项 Email、GitHub、LinkedIn 底边带有 1px 极细半透明分割线与小 `↗`，消除中间挤压和左右大留白。
- 保留 `Perfectly balanced.` 与 `Hi, this is OP.` 的首尾呼应。
- Email、GitHub、LinkedIn 作为同级 metadata links。

## 实现边界

- 只修改 `Background`、`Internship`、`Project`、`Footer` 及直接相关 SCSS。
- 不新增路由，不更改 section IDs，不修改静态资源。
- 滚动状态保留在各自 phone carousel 组件的局部 React state；不写入 Redux/localStorage。
- `prefers-reduced-motion` 只禁用动画和平滑滚动，不影响 phone 布局规则。

## 验收

- 375px phone：四个 section 内容完整可读，无横向页面溢出，两个 carousel 的指示与当前卡片一致。
- 768px tablet：不出现 phone layout 意外失效或卡片裁切。
- 1024px desktop：现有视觉、导航与卡片交互不变。
- `npm run lint`、`npm run build` 和 `git diff --check` 通过。
