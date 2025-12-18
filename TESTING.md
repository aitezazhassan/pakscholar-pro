# PakScholar Pro - Testing Guide

## Quick Start Testing

### 1. Start Development Server
```bash
npm run dev
```
Server will start at: `http://localhost:3000`

---

## Pages to Test

### ✅ Homepage
**URL**: `http://localhost:3000`

**What to Check**:
- Hero section with gradient text loads
- Animated background pattern visible
- 4 stat cards display (150+ Essays, 500+ MCQs, etc.)
- 8 category cards in grid
- CTA section with buttons
- Header navigation works
- Mobile menu (hamburger) works

---

### ✅ Essays Listing  
**URL**: `http://localhost:3000/essays`

**What to Check**:
- Page loads without errors
- 2 sample essays display in grid:
  1. "Effective Essay Writing for CSS English Paper"
  2. "Understanding Pakistan's Constitutional Framework"
- Each card shows: category badge, title, excerpt, author, date, tags
- Clicking an essay navigates to detail page

---

### ✅ Essay Detail
**URL**: Click any essay from listing

**What to Check**:
- Detail page loads (NOT 404)
- Back button works
- Category badge displays
- Title, excerpt, metadata show correctly
- Tags are clickable
- Content renders properly

---

### ✅ MCQ Practice
**URL**: `http://localhost:3000/practice`

**What to Check**:
- Quiz interface loads
- Question displays with 4 options
- Clicking an answer shows instant feedback:
  - Green border for correct
  - Red border for incorrect  
  - Explanation appears
- "Next Question" button works
- Completion screen shows score
- "Try Again" resets quiz

---

### ✅ Past Papers
**URL**: `http://localhost:3000/past-papers`

**What to Check**:
- Page loads
- Empty state shows (no PDFs uploaded yet)
- "Go to Admin" button visible
- Clicking button navigates to Keystatic

---

### ✅ Admin Panel (Keystatic)
**URL**: `http://localhost:3000/keystatic`

**Credentials**: Password: `admin123`

**What to Check**:
1. Login screen appears
2. Enter password: `admin123`
3. Click Login button
4. Dashboard loads successfully
5. Click "Essays" collection
6. Both sample essays appear in list
7. Click an essay to edit
8. Editor loads with all fields
9. Make a small change
10. Click Save button
11. Save succeeds without errors

**Collections to Verify**:
- ✅ Essays (2 items)
- ✅ MCQs (2 items) 
- ✅ Authors (1 item)
- ✅ Past Papers (empty)
- ✅ Categories (empty)

---

## Common Issues & Solutions

### Essay Detail Shows 404
**Fixed**: Updated to Next.js 15+ async params pattern

### Keystatic "Unable to load collection"
**Fixed**: Removed `contentField` from config to match plain markdown files

### Admin Save Button Not Working
**Fixed**: Created proper API route at `/api/keystatic/[...params]`

### YAML Parsing Errors
**Fixed**: Converted excerpts to single-line strings with quotes

---

## Browser Console Checks

Press **F12** to open Developer Tools:

1. **Console Tab**: Should have NO errors
2. **Network Tab**: All requests should return 200 status
3. **No 404s or 500s**

---

## Mobile Testing

1. Resize browser to 375px width (iPhone size)
2. Click hamburger menu icon
3. Menu drawer should slide in from right
4. Navigation links work
5. Mobile layout looks good on all pages

---

## Performance Checks

- Homepage loads in < 2 seconds
- Essay pages load in < 1 second  
- Quiz is instant and responsive
- No layout shifts or flickering
- Smooth animations throughout

---

## Final Verification Checklist

- [ ] All pages load without errors
- [ ] Navigation works between all pages
- [ ] Essays listing shows 2 essays
- [ ] Essay detail pages load (not 404)
- [ ] Quiz works with instant feedback
- [ ] Keystatic admin login works
- [ ] Collections load in Keystatic
- [ ] Can view essays in admin
- [ ] Mobile menu works
- [ ] No console errors
- [ ] All routes return 200 status

---

## Reporting Issues

If you find any bugs:

1. Note the exact URL
2. Copy the error message from console (F12)
3. Describe what you expected vs what happened
4. Include screenshots if UI issue

## Success Criteria

✅ **100% Functional** means:
- Zero errors in browser console
- All pages load successfully
- All navigation works
- Keystatic admin fully operational
- Content can be viewed and edited
- Mobile responsive on all screen sizes
