
import React from 'react';

interface MembershipFeeDisplayProps {
  membershipType: 'individual' | 'institutional';
  watchCountry: string;
  countryInfo: { fee: number; classification: string } | undefined;
  membershipFee: number;
  classification: string;
}

const MembershipFeeDisplay: React.FC<MembershipFeeDisplayProps> = ({
  membershipType,
  watchCountry,
  countryInfo,
  membershipFee,
  classification
}) => {
  const isIndividual = membershipType === 'individual';
  const bgColor = isIndividual ? 'bg-green-50' : 'bg-blue-50';
  const textColor = isIndividual ? 'text-green-900' : 'text-blue-900';
  const secondaryTextColor = isIndividual ? 'text-green-800' : 'text-blue-800';
  const tertiaryTextColor = isIndividual ? 'text-green-700' : 'text-blue-700';
  const quaternaryTextColor = isIndividual ? 'text-green-600' : 'text-blue-600';

  const feeStructure = isIndividual 
    ? {
        'High-Income Countries': '€100',
        'Upper-Middle-Income Countries': '€75',
        'Lower-Middle-Income Countries': '€50',
        'Low-Income Countries': '€25'
      }
    : {
        'High-Income Countries': '€1,000',
        'Upper-Middle-Income Countries': '€750',
        'Lower-Middle-Income Countries': '€500',
        'Low-Income Countries': '€250'
      };

  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h3 className={`text-lg font-semibold ${textColor} mb-3`}>Membership Investment</h3>
      {watchCountry && countryInfo ? (
        <>
          <p className={`${secondaryTextColor} mb-2`}>
            <strong>Your Annual Membership Fee:</strong> €{membershipFee}
          </p>
          <p className={`text-sm ${tertiaryTextColor} mb-2`}>
            <strong>Country Classification:</strong> {classification}
          </p>
          <p className={`text-sm ${tertiaryTextColor}`}>
            Pricing is based on World Bank country income classifications to ensure global accessibility. 
            {isIndividual ? 'Individual' : 'Institutional'} membership fees are structured to be 
            {isIndividual ? 'affordable' : 'sustainable'} within each country's economic context.
          </p>
        </>
      ) : (
        <>
          <p className={`${secondaryTextColor} mb-2`}>
            <strong>{isIndividual ? 'Individual' : 'Institutional'} Membership Fees:</strong>
          </p>
          <ul className={`text-sm ${tertiaryTextColor} space-y-1`}>
            {Object.entries(feeStructure).map(([classification, fee]) => (
              <li key={classification}>• {classification}: {fee} annually</li>
            ))}
          </ul>
          <p className={`text-xs ${quaternaryTextColor} mt-3`}>
            Select your country above to see your specific membership fee.
          </p>
        </>
      )}
    </div>
  );
};

export default MembershipFeeDisplay;
