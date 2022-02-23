const msgPath = process.env.GIT_PARAMS;
const msg = (await import('fs')).readFileSync(msgPath, 'utf-8').trim();

const releaseRE = /^v\d/;
const commitRE =
  /^(revert: )?(feat|fix|docs|refactor|perf|test|style|chore)(\(.+\))?: .{1,50}/;

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log();
  console.error(`
  [ERROR] 错误的提交信息格式\n
  type 格式说明：\n
    ○ feat：新功能\n
    ○ fix：修补 bug\n
    ○ docs：文档更改\n
    ○ style：不影响代码含义的更改\n
    ○ refactor：代码更改，但不涉及修复 bug 与添加新功能\n
    ○ perf：性能优化的更改\n
    ○ test：添加测试单元\n
    ○ chore：对构建过程或辅助工具和库的更改\n
  `);
  process.exit(1);
}
