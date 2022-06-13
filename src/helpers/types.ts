// Best fitting workaround based in the comment in this issue: https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217
function setBool(value: boolean): number {
  return value ? 1 : 0;
}

export { setBool };
