import chalk from 'chalk';

export default class Logger {
   logText(text) {
      console.log(text);
      return this;
   }

   logDivider() {
      console.log(
         chalk.gray(
            '----------------------------------------------------------------------'
         )
      );
      return this;
   }

   logColoredText(text) {
      console.log(chalk.blue(text));
      return this;
   }

   logColoredBg(text) {
      console.log(chalk.bgBlueBright(text));
      return this;
   }

   logOrderedList(list, title) {
      console.log(title);
      list.forEach((item, idx) =>
         console.log(`${idx + 1} - ${chalk.yellowBright(item)}`)
      );
      return this;
   }

   logWarningText(text) {
      console.log(chalk.yellow(text));
      return this;
   }

   logWarningBg(text) {
      console.log(chalk.bgYellow(text));
      return this;
   }
}
