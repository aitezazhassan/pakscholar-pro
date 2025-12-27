-- ============================================
-- PAKSCHOLAR PRO - EXTENDED DATABASE SCHEMA
-- Real User Data Integration
-- ============================================

-- ============================================
-- 1. QUIZ ATTEMPTS TABLE
-- Tracks all quiz/exam attempts by users
-- ============================================
CREATE TABLE IF NOT EXISTS quiz_attempts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_id TEXT NOT NULL,
    exam_title TEXT NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    score_percentage DECIMAL(5,2) NOT NULL,
    time_taken_seconds INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    answers_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_completed_at ON quiz_attempts(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_exam_id ON quiz_attempts(exam_id);

-- RLS Policies
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own quiz attempts"
    ON quiz_attempts FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz attempts"
    ON quiz_attempts FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- ============================================
-- 2. STUDY SESSIONS TABLE
-- Tracks learning time and topics studied
-- ============================================
CREATE TABLE IF NOT EXISTS study_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject TEXT NOT NULL,
    topic TEXT,
    duration_minutes INTEGER NOT NULL,
    started_at TIMESTAMP WITH TIME ZONE NOT NULL,
    ended_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_started_at ON study_sessions(started_at DESC);
CREATE INDEX IF NOT EXISTS idx_study_sessions_subject ON study_sessions(subject);

-- RLS Policies
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own study sessions"
    ON study_sessions FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own study sessions"
    ON study_sessions FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own study sessions"
    ON study_sessions FOR UPDATE
    USING (auth.uid() = user_id);

-- ============================================
-- 3. BOOKMARKS TABLE
-- Save important topics/questions for later
-- ============================================
CREATE TABLE IF NOT EXISTS bookmarks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    content_type TEXT NOT NULL CHECK (content_type IN ('topic', 'question', 'resource', 'page')),
    content_id TEXT NOT NULL,
    content_title TEXT NOT NULL,
    content_url TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(user_id, content_type, content_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_content_type ON bookmarks(content_type);
CREATE INDEX IF NOT EXISTS idx_bookmarks_created_at ON bookmarks(created_at DESC);

-- RLS Policies
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookmarks"
    ON bookmarks FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bookmarks"
    ON bookmarks FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookmarks"
    ON bookmarks FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookmarks"
    ON bookmarks FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================
-- 4. USER PROGRESS TABLE
-- Track completion of topics/subjects
-- ============================================
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject TEXT NOT NULL,
    topic TEXT NOT NULL,
    completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    mastery_level TEXT DEFAULT 'beginner' CHECK (mastery_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(user_id, subject, topic)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_subject ON user_progress(subject);
CREATE INDEX IF NOT EXISTS idx_user_progress_last_accessed ON user_progress(last_accessed DESC);

-- RLS Policies
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress"
    ON user_progress FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
    ON user_progress FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
    ON user_progress FOR UPDATE
    USING (auth.uid() = user_id);

-- ============================================
-- 5. DAILY GOALS TABLE
-- Personal study goals and tracking
-- ============================================
CREATE TABLE IF NOT EXISTS daily_goals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    goal_type TEXT NOT NULL CHECK (goal_type IN ('questions_answered', 'study_time', 'topics_completed', 'quizzes_taken')),
    target_value INTEGER NOT NULL,
    current_value INTEGER DEFAULT 0,
    goal_date DATE NOT NULL,
    achieved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(user_id, goal_type, goal_date)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_daily_goals_user_id ON daily_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_goals_date ON daily_goals(goal_date DESC);
CREATE INDEX IF NOT EXISTS idx_daily_goals_achieved ON daily_goals(achieved);

-- RLS Policies
ALTER TABLE daily_goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own goals"
    ON daily_goals FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own goals"
    ON daily_goals FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own goals"
    ON daily_goals FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own goals"
    ON daily_goals FOR DELETE
    USING (auth.uid() = user_id);

-- ============================================
-- 6. USER ACHIEVEMENTS TABLE (BONUS)
-- Track milestones and achievements
-- ============================================
CREATE TABLE IF NOT EXISTS user_achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    achievement_type TEXT NOT NULL,
    achievement_title TEXT NOT NULL,
    achievement_description TEXT,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    metadata JSONB,
    UNIQUE(user_id, achievement_type)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_achievements_user_id ON user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_earned_at ON user_achievements(earned_at DESC);

-- RLS Policies
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own achievements"
    ON user_achievements FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements"
    ON user_achievements FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to update user_progress.updated_at automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for user_progress
CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for daily_goals
CREATE TRIGGER update_daily_goals_updated_at
    BEFORE UPDATE ON daily_goals
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VIEWS FOR ANALYTICS
-- ============================================

-- User Statistics Summary View
CREATE OR REPLACE VIEW user_stats_summary AS
SELECT 
    user_id,
    COUNT(DISTINCT id) as total_quizzes,
    AVG(score_percentage) as average_score,
    SUM(time_taken_seconds) as total_study_time_seconds,
    MAX(completed_at) as last_quiz_date,
    COUNT(DISTINCT exam_id) as unique_exams_taken
FROM quiz_attempts
GROUP BY user_id;

-- Recent Activity View
CREATE OR REPLACE VIEW user_recent_activity AS
SELECT 
    user_id,
    'quiz' as activity_type,
    exam_title as title,
    score_percentage::TEXT || '%' as details,
    completed_at as activity_date
FROM quiz_attempts
UNION ALL
SELECT 
    user_id,
    'study' as activity_type,
    subject || ' - ' || COALESCE(topic, 'General') as title,
    duration_minutes::TEXT || ' min' as details,
    started_at as activity_date
FROM study_sessions
ORDER BY activity_date DESC;

-- ============================================
-- SAMPLE DATA FOR TESTING (OPTIONAL)
-- Uncomment to insert sample data for development
-- ============================================

-- INSERT INTO quiz_attempts (user_id, exam_id, exam_title, total_questions, correct_answers, score_percentage, time_taken_seconds, answers_data)
-- VALUES (
--     auth.uid(),
--     'pms-160',
--     'PMS Model Paper 160',
--     100,
--     85,
--     85.00,
--     3600,
--     '{"answers": [{"question": 1, "correct": true}, {"question": 2, "correct": false}]}'::jsonb
-- );
