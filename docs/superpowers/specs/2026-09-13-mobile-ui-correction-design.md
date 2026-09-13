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
- 与 Intern 进度条风格统一，移除 `01 / 02` 数字，采用同款 48px 胶囊轨道 + 50% 滑块。
- 真实图表继续以 contain 方式完整展示，避免裁切。

### 4. Contact 联系区

- 修复 `.site-footer__list` 和 `.site-footer__item` 的全宽纵向排列（`width: 100%`），使每一项 Email、GitHub、LinkedIn 自然贴合手机宽度（两侧保留 1.25rem 屏幕安全边距），彻底消除中间挤压和左右大留白。
- 保留 `Perfectly balanced.` 与 `Hi, this is OP.` 的首尾呼应。
- Email、GitHub、LinkedIn 继续是同级 metadata links。

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
