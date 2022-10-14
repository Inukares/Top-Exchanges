import { formatTradeVolume } from '../routes/exchange/Exchange';

export const Table = ({ exchanges }) => {
  const header = (
    <div className="header">
      <div>Exchange</div>
      <div>Image</div>
      <div>Year Established</div>
      <div>Country</div>
      <div>Incetivizes trading</div>
      <div>Trust score</div>
      <div>Trust score rank</div>
      <div>BTC 24h Volume</div>
    </div>
  );

  const content = exchanges.map((exchange, index) => (
    <div key={exchange.name ?? index} className="item">
      <div> {exchange.name ?? '-'}</div>
      <img
        data-test-id={exchange.name + '-img'}
        alt={exchange.name}
        src={exchange.image}
      ></img>
      <div> {exchange.year_established ?? 'Not specified'}</div>
      <div> {exchange.country ?? '-'}</div>
      <div> {exchange.has_trading_incentive ? 'Yes' : 'No'}</div>
      <div> {exchange.trust_score ?? '-'}</div>
      <div> {exchange.trust_score_rank ?? '-'}</div>
      <div>
        {' '}
        {formatTradeVolume(
          exchange.trade_volume_24h_btc_normalized,
          exchange.trade_volume_24h_btc
        )}
      </div>
    </div>
  ));

  return (
    <>
      {header}
      {content}
    </>
  );
};
