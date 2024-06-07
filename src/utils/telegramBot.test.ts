import sendTelegramMessage from './telegramBot';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

describe('sendTelegramMessage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should send a message successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ ok: true }));

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    process.env.TELEGRAM_BOT_TOKEN = 'test-token';
    process.env.TELEGRAM_CHAT_ID = 'test-chat-id';

    await sendTelegramMessage('Test message');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.telegram.org/bottest-token/sendMessage?chat_id=test-chat-id&text=Test message&parse_mode=HTML'
    );
    expect(consoleLogSpy).toHaveBeenCalledWith('Sending message to telegram...');
    expect(consoleLogSpy).toHaveBeenCalledWith('Message sent successfully ✅');
    expect(consoleErrorSpy).not.toHaveBeenCalled();

    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  // Additional tests can be written to handle different scenarios, such as failure to send a message
});