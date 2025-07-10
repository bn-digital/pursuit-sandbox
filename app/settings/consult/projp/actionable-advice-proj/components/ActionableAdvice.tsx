// app/settings/consult/projp/actionable-advice-proj/components/ActionableAdvice.tsx
// version: 1
// author: YuriiIlkevych/BNDigital

// We use 'any' intentionally, as this is a placeholder.
// The consultant is responsible for implementing the correct, strong types.
/* eslint-disable @typescript-eslint/no-explicit-any */

interface ErrorData {
  hasError: boolean;
  type: string;
  message: string
};

interface MeetingContext {
  meetingId: number;
  attendee: string;
  dateTime: string;
};

interface LeadershipGoal {
  style: string;
  trait: string;
};

interface FeedbackSection {
  title: string;
  text: string;
};

interface Feedback {
  originalStatement: FeedbackSection;
  analysis: FeedbackSection;
  suggestion: FeedbackSection;
};

interface ActionableAdvice {
  feedback: Feedback;
  leadershipGoal: LeadershipGoal;
  meetingContext: MeetingContext
};

interface ActionableAdviceProps {
  data: {
    error: ErrorData,
    actionableAdvice: ActionableAdvice | null
  };
};

const leadershipGoalIconMap: Record<"style" | "trait", string> = {
  style:
    "https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0a01e618728ce8ced%2Fb87855325acb416bbceeecddfad634a5",
  trait:
    "https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0a01e618728ce8ced%2F2df5b1157d494663be997746d5625b1e",
};

const FeedbackSectionStyleIconMap: Record<
  "originalStatement" | "analysis" | "suggestion",
  string
> = {
  originalStatement:
    "https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0a01e618728ce8ced%2Fe37c64620915459f8dd510b9955d91df",
  analysis:
    "https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0a01e618728ce8ced%2Fb56b0ef9f1c649f089e0e95f688b1be5",
  suggestion:
    "https://cdn.builder.io/api/v1/image/assets%2F976a0da190bf4da0a01e618728ce8ced%2F394412f2dd694d6aa6899deb30a1eeb9",
};

/**
 * This is a placeholder for the real ActionableAdvice component.
 * It simply renders the raw JSON data it receives.
 */
export default function ActionableAdvice({ data }: ActionableAdviceProps) {

  if (data.error.hasError) {

    const comment = `
      <!--
        ActionableAdvice Component Error:
        Type: ${data.error.type}
        Message: ${data.error.message}
      -->
    `;
    return <div dangerouslySetInnerHTML={{ __html: comment }} />;
  };

  if (!data.actionableAdvice) return null;

  const meetingContextFields = data?.actionableAdvice?.meetingContext;
  const leadershipGoalFields = data?.actionableAdvice?.leadershipGoal;
  const feedbackOriginalStatement = data?.actionableAdvice?.feedback?.originalStatement;
  const feedbackAnalysis = data?.actionableAdvice?.feedback?.analysis;
  const feedbackSuggestion = data?.actionableAdvice?.feedback?.suggestion;

  return (
    <div>
      <h3 className="text-md font-semibold text-neutral-600 mb-2">
        Rendered Component Output:
      </h3>

      <section className="box-border flex relative flex-col shrink-0 gap-6 mt-5">
        <header
          aria-label="Actionable Advice section"
          className="relative self-stretch w-full text-3xl font-semibold tracking-tight"
        >
          Actionable advice
        </header>

        <div
          className="flex flex-col gap-3 items-start p-4 mx-auto my-0 w-full max-w-screen-lg bg-neutral-100 rounded-[32px] shadow-[0px_-1px_24px_0px_#0000000A,0px_-0.5px_1px_0px_#0000001F]
"
        >
          {/* Meeting Information Header */}
          {(meetingContextFields || leadershipGoalFields) && (
            <div className="box-border flex flex-wrap overflow-hidden overflow-x-scroll relative flex-row shrink-0 gap-8 px-6 w-full">
              {(meetingContextFields?.dateTime ||
                meetingContextFields?.attendee) && (
                <div className="box-border flex relative flex-col grow shrink-0 gap-0.5 w-auto">
                  {meetingContextFields?.dateTime && (
                    <time className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                      {meetingContextFields?.dateTime}
                    </time>
                  )}
                  {meetingContextFields?.attendee && (
                    <h3 className="box-border relative shrink-0 h-auto text-base text-zinc-500 font-medium">
                      {`Meeting with ${meetingContextFields?.attendee}`}
                    </h3>
                  )}
                </div>
              )}

              {(leadershipGoalFields?.style || leadershipGoalFields?.trait) && (
                <div className="box-border flex relative flex-row shrink-0 gap-6 self-center">
                  {leadershipGoalFields?.style && (
                    <div className="box-border flex relative flex-col shrink-0 gap-0.5 w-auto">
                      <span className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                        Leadership Style
                      </span>
                      <div className="box-border flex relative flex-row shrink-0 gap-1 justify-start items-center">
                        <img
                          src={leadershipGoalIconMap.style}
                          className="box-border object-cover overflow-hidden shrink-0 w-4 h-4"
                          alt={`${leadershipGoalFields?.style} icon`}
                        />
                        <span className="box-border relative shrink-0 h-auto text-base text-zinc-500">
                          {leadershipGoalFields?.style}
                        </span>
                      </div>
                    </div>
                  )}

                  {leadershipGoalFields?.trait && (
                    <div className="box-border flex relative flex-col shrink-0 gap-0.5 w-auto">
                      <span className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
                        Trait
                      </span>
                      <div className="box-border flex relative flex-row shrink-0 gap-1 justify-start items-center">
                        <img
                          src={leadershipGoalIconMap.trait}
                          className="box-border object-cover overflow-hidden shrink-0 w-4 h-4"
                          alt={`${leadershipGoalFields?.trait} icon`}
                        />
                        <span className="box-border relative shrink-0 h-auto text-base text-zinc-500">
                          {leadershipGoalFields?.trait}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Advice Cards Grid */}
          {(feedbackOriginalStatement ||
            feedbackAnalysis ||
            feedbackSuggestion) && (
            <div className="box-border relative shrink-0 gap-4 w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* What you said card */}
                {feedbackOriginalStatement && (
                  <article className="w-[33%] max-md:ml-0 max-md:w-full ">
                    <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-white rounded-[24px] shadow ">
                      <img
                        src={FeedbackSectionStyleIconMap.originalStatement}
                        className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                        alt={`${feedbackOriginalStatement?.title} icon`}
                      />
                      <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                        {feedbackOriginalStatement?.title && (
                          <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-medium text-[15px]">
                            {feedbackOriginalStatement?.title}
                          </h4>
                        )}
                        {feedbackOriginalStatement?.text && (
                          <blockquote className="box-border relative shrink-0 h-auto text-lg italic font-light text-neutral-800">
                            {feedbackOriginalStatement?.text}
                          </blockquote>
                        )}
                      </div>
                    </div>
                  </article>
                )}

                {/* Why it matters card */}
                {feedbackAnalysis && (
                  <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-white rounded-[24px] shadow">
                      <img
                        src={FeedbackSectionStyleIconMap.analysis}
                        className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                        alt={`${feedbackAnalysis?.title} icon`}
                      />
                      <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                        {feedbackAnalysis?.title && (
                          <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-medium text-[15px]">
                            {feedbackAnalysis?.title}
                          </h4>
                        )}
                        {feedbackAnalysis?.text && (
                          <p className="box-border relative shrink-0 h-auto text-lg font-light leading-snug text-neutral-800">
                            {feedbackAnalysis?.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                )}

                {/* Try this next time card */}
                {feedbackSuggestion && (
                  <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="box-border flex overflow-hidden relative flex-col grow p-4 gap-2 bg-green-50 rounded-[24px] shadow">
                      <img
                        src={FeedbackSectionStyleIconMap.suggestion}
                        className="box-border object-cover overflow-hidden shrink-0 w-7 h-7"
                        alt={`${feedbackSuggestion?.title} icon`}
                      />
                      <div className="box-border flex relative flex-col grow shrink-0 gap-1">
                        {feedbackSuggestion?.title && (
                          <h4 className="box-border relative shrink-0 h-auto text-base leading-tight font-medium text-[15px]">
                            {feedbackSuggestion?.title}
                          </h4>
                        )}
                        {feedbackSuggestion?.text && (
                          <p className="box-border relative shrink-0 h-auto text-lg font-light leading-snug text-neutral-800">
                            {feedbackSuggestion?.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                )}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <footer className="box-border flex relative flex-col shrink-0 px-6 w-full mt-6">
            <p className="box-border relative shrink-0 h-auto text-xs font-light text-zinc-500">
              Reflective guidance from recent 1:1s. May not capture full
              context. Use your best judgment.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
