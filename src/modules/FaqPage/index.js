import Image from 'next/image'
import * as S from './styles'
import Accordion from './Accordion'

const accordion = [
  {
    title: '1. What is 1USDT?',
    content:
      '1USDT is a multi-state lottery game, this is a non-profit project, that creates opportunities for lucky people to win. With millions of people playing, jackpots can roll to even higher levels at a faster rate. You choose six pairs of numbers from the range 1 to 55 to win the game. Until further notice, the starting jackpot will vary based on sales and will be announced before each drawing.'
  },
  {
    title: '2. Where can I get results for 1USDT?    ',
    content:
      'Right here on the official 1USDT website. Winning numbers are posted shortly after each drawing. Information on the number of winners based on the results of Vietlott after 1USDT lottery security has verified winning ticket sales.'
  },
  {
    title: '3. How long do I have to collect a 1USDT prize??    ',
    content:
      'Claim periods vary by jurisdiction based on local rules and regulations, so the time period for claiming prizes ranges from 90 days to one year from the draw date.'
  },
  {
    title: '4. Can a group of people share a 1USDT prize?',
    content: 'No. Prizes received by the winners will be decided by themselves.'
  },
  {
    title: '5. How does 1USDT take care of business?',
    content: `Unlike some multi-state or multi-country lotteries that have central offices, all 1USDT duties are shared by member states as part of their membership in the game.
      <br/>
      While most accounting is handled by each member state individually, key duties such as projecting jackpots, budgeting and expenditures, settlements of draw and wagering data, financial settlements (prize expense shares and banking/cash settlements), monitoring of raw data and statistics, public relations, draw show production and broadcasting, technical duties (i.e. software development) and legal work are all shared.`
  },
  {
    title:
      '6. I received an email or phone call saying that I have won 1USDT. Is it legitimate?',
    content: `If you have not already purchased a 1USDT ticket from a participating lottery, then this is a scam. You can’t win any legitimate lottery if you didn’t buy a ticket.
      <br/>
      The scams take many forms and the scammers use many tricks. In most cases, the criminal’s e-mail or call to tell intended victims they have won a large prize. They might identify themselves as being with 1USDT or another legitimate lottery, even though 1USDT  is a game, not an organization, and is only sold through participating lotteries. These scams all have one thing in common: They try to trick you into sending them money or personal information by claiming that you have won a large lottery prize. The crooks usually try to get you to wire money for “taxes” or “fees,” or may try to get you to provide them with a bank account number, which they will then clean out. Please contact your local lottery if you have any questions or have received a suspicious email or phone call.`
  },
  {
    title: '7. Can I buy 1USDT tickets online?  ',
    content: 'You can buy online anytime and anywhere.'
  },
  {
    title: '8. Is there a 1USDT mobile app?',
    content:
      'Because 1USDT sold by individual lotteries, there is no official game app. Most lotteries have their own apps, which typically contain information about the games they offer, including 1USDT. Some lotteries’ apps also provide winning number notifications and other useful tools.'
  },
  {
    title:
      '9. What happens to 1USDT payments if the winner dies before collecting?',
    content:
      'If a winner dies before receiving all annual payments, 1USDT will continue to pay the annual payments, as scheduled, to the winner’s designated beneficiary or to the winner’s estate.'
  },
  {
    title: '10. Are prizes taxable?',
    content:
      'Yes. All prizes are subject to income taxes. For tax-withholding information, please check with your 1USDT lottery. '
  }
]

const Faq = () => {
  return (
    <S.Drop>
      <S.Wrapper>
        <S.ImageFaq>
          <Image
            src="/images/Faq.png"
            width="2000px"
            height="260px"
            alt="faq"
            objectFit="cover"
          />
        </S.ImageFaq>
        <S.WrapperMenuContent>
          {accordion.map((item, index) => {
            return (
              <div key={index}>
                <Accordion title={item.title} content={item.content} />
              </div>
            )
          })}
        </S.WrapperMenuContent>
      </S.Wrapper>
    </S.Drop>
  )
}

export default Faq
