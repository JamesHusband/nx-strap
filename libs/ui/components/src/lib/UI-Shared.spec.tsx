import { render } from '@testing-library/react';

import UIShared from './UI-Shared';

describe('UIShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UIShared />);
    expect(baseElement).toBeTruthy();
  });
});
